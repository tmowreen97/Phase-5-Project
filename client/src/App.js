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

export const UserContext = createContext()
function App() {

  // const [query, setQuery]= useState([])
  const activities=[]

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
    select: (data) => {
      const act= []
      data.map((dat)=> {
        return(
          dat.activities.map((acti)=> {
          return (act.push(acti))
        })
        )
      })
      activities.push(act)
      return data
    }
  })
  const [isLogged, setIsLogged] = useState(false)


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
    <UserContext.Provider value={{user, setUser, setIsLogged}}>
      <div className="app">
      {user && <Navigation user={user} setIsLogged={setIsLogged} setUser={setUser}/>}
      <Routes>
        <Route element={<Login setIsLogged={setIsLogged} setUser={setUser}/>} path="/login"/>
        <Route element={<SignUp setUser={setUser} setIsLogged={setIsLogged}/>} path="/signup"/>
        {user && <Route element={<Profile user={user}/>} path="/profile"/>}
        {user && category_query && <Route element={<Categories categories={category_query}/>} path="/categories"/>}
        {user && category_query && <Route element={<CategoryShow categories={category_query} user={user} />} path="/categories/:id"/>}
        {user && activities && <Route element={<Activities activities={activities.flat()}/>} path="/activities"/>}
        <Route element={<Home user={user}/>} exact path="/"/>
      </Routes>
      </div>
      </UserContext.Provider>
   
  );
}

export default App;
