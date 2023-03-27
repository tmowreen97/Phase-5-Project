import { useState, createContext } from 'react';
import '../src/styles/styles.css';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import Profile from './Profile';
import Navigation from './NavBar';
import CategoryShow from './CategoryShow';
import { Routes, Route } from 'react-router-dom';
import Categories from './Categories';
import Activities from './Activities';
import { useQuery } from 'react-query';
import axios from 'axios';

// useQuery is the hook for all data fetching needs
// takes two arguments, first one is a key second is a function that returns a promise

export const AppContext = createContext()
function App() {
  const [activities, setActivities] = useState([])
  const [user, setUser]= useState(null)

  //This useQuery is to keep the user logged in, sends request to sessions#create /me
  //If successful setUser to data, else setUser to null
  useQuery('me', async () => {
    try{
      return(
      axios.get('/me')
      .then(resp => {return(resp.data)})
    )
    } catch(error){
      setUser(null)
    }
  }, {
    onSuccess : (data) => {
      setUser(data)
    } 
  })

  //This useQuery currently working for categories and category show page AND activities
  //Able to store activities in activities state
  const {
    data: category_query
  } = useQuery('categories', () => {
    return(
      axios.get('/categories')
      .then(resp => {
        return resp.data
      })
    )
  }, {
    retryOnMount: false,
    onSuccess : (data) => {
      const act = data.map((dat)=> {
        return(
          dat.activities.flat().map((acti)=> {
          return (acti)
        })
        )
      })
      setActivities([...act.flat()])
      return data
    } 
  })

  return (
    <AppContext.Provider value={{user, setUser, activities, category_query}}>
      <div className="app">
      {user && <Navigation/>}
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<SignUp/>} path="/signup"/>
        {user && <Route element={<Profile/>} path="/profile"/>}
        {user && category_query && <Route element={<Categories/>} path="/all-categories"/>}
        {user && category_query && <Route element={<CategoryShow/>} path="/category/:id"/>}
        {user && category_query && <Route element={<Activities/>} path="/all-activities"/>}
        <Route element={<Home/>} exact path="/"/>
      </Routes>
      </div>
      </AppContext.Provider>
   
  );
}

export default App;
