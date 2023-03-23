import { useState, useEffect, createContext } from 'react';
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

// useQuery is the hook for all data fetching needs
// takes two arguments, first one is a key second is a function that returns a promise

export const AppContext = createContext()
function App() {

  // const [query, setQuery]= useState([])
  let activities

  //This useQuery currently working for categories and category show page AND activities
  //Able to store activities in array activities above
  const {
    status,
    error,
    data: category_query
  } = useQuery('categories', () => {
    return(
      fetch('/categories')
      .then(resp => resp.json())
    )
  }, {
    retryOnMount: 'always',
    select: (data) => {
      console.log('data first', data)
      const act = data.map((dat)=> {
        return(
          dat.activities.flat().map((acti)=> {
          return (acti)
        })
        )
      })
      activities=[...act.flat()]
      console.log('act in query', activities)
      
      return data
    }
  })
  const [isLogged, setIsLogged] = useState(false)

  console.log('with let', activities)


  // **USER USEQUERY NOT WORKING 

  // const user_query = useQuery("me", async () => {
  //     const response = await fetch("/me")
  //     if (!response.ok){
  //       throw new Error('Not successful')
  //     }
  //     return response.json()
  //   },
  //   {
  //     refetchOnMount: 'always',
  //   }
  // )
  // console.log('query', user_query)
  // console.log('query.data', user_query.data)

  const [user, setUser]= useState(null)
  console.log('user', user)


  // console.log('user status', user_status)

  //USEQUERY FORMAT FOR FETCH REQUESTS WITH ERRORS
  // useQuery({
  //   queryKey: ['todos', todoId],
  //   queryFn: async () => {
  //     const response = await fetch('/todos/' + todoId)
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok')
  //     }
  //     return response.json()
  //   },
  // })

  //keeps user logged in
  useEffect(()=> {
    console.log('useeffect initiated')
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then((user)=> {
          setUser(user)
        })
      }
    })
  }, [isLogged])

  console.log('isLogged', isLogged)
  return (
    <AppContext.Provider value={{user, setUser, setIsLogged, activities, category_query}}>
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
