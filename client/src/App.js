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
import Images from './Images';

// useQuery is the hook for all data fetching needs
// takes two arguments, first one is a key second is a function that returns a promise

export const AppContext = createContext()
function App() {
  const [activities, setActivities] = useState(null)
  const [categories, setCategories] = useState(null)
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
  useQuery('categories', () => {
    return(
      axios.get('/categories')
      .then(resp => {
        return resp.data
      })
    )
  }, {
    onSuccess : (data) => {
      const act = data.map((categories)=> {
        return(
          categories.activities.map((activity)=> {
          return (activity)
        })
        )
      })
      setActivities([...act.flat()])
      setCategories(data)
      return data
    } 
  })

  return (
    <AppContext.Provider value={{user, setUser, activities, categories}}>
      <div className="app">
      {user && <Navigation/>}
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<SignUp/>} path="/signup"/>
        {user && <Route element={<Profile/>} path="/profile"/>}
        {user && categories && <Route element={<Categories/>} path="/all-categories"/>}
        {user && categories && <Route element={<CategoryShow/>} path="/category/:id"/>}
        {user && activities && <Route element={<Activities/>} path="/all-activities"/>}
        {user && activities && <Route element={<Images/>} path="/images"/>}

        <Route element={<Home/>} exact path="/"/>
      </Routes>
      </div>
      </AppContext.Provider>
   
  );
}

export default App;
