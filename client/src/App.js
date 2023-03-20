import react, { useState, useEffect } from 'react';
import '../src/styles/styles.css';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import Profile from './Profile';
import Navigation from './NavBar';
import CategoryShow from './CategoryShow';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { redirect} from 'react-router-dom';
import Categories from './Categories';
import {createStore} from 'redux';
import { Provider, useDispatch } from 'react-redux';
import allReducers from './reducers';
import Activities from './Activities';
import { useQuery } from 'react-query';

// useQuery is the hook for all data fetching needs
// takes two arguments, first one is a key second is a function that returns a promise

function App() {
  const store = createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  const [query, setQuery]= useState([])

  //This useQuery currently working for categories and category show page
  const {
    status: categories_status,
    error: categories_error,
    data: category_query
  } = useQuery('categories', () => {
    return(
      fetch('/categories')
      .then(resp => resp.json())
    )
  })

  // const [category, setCategory] = useState(categories_query.data)
  // console.log('query', categories_query.data)
  console.log('query', category_query)
  console.log('status', categories_status)
  console.log('error', categories_error)


  // console.log('just console.log', store.getState())
  // store.subscribe(function(){
  //   // debugger
  //   const state = store.getState()
  //   console.log('in subscribe', state)
  // })

  const [user, setUser]= useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [categories, setCategories]= useState([])
  const [activities, setActivities] = useState([])

  const user_query = useQuery('me', () => {
    return(
      fetch('/me')
      .then(resp => resp.json())
    )
  })
  console.log('user query', user_query.data)


  //keeps user logged in
  useEffect(()=> {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then((user)=> {
          setUser(user)
          // store.dispatch({type:'LOGIN'})
          // store.dispatch({type:'SET_USER', payload: user})
        })
      }
    })
  }, [isLogged])

  console.log('isLogged', isLogged)

  //gets all the categories
  useEffect(()=> {
    fetch("/categories").then(
      r=>r.json()
      ).then((categories) => {
        const activities = []
        categories.map((category)=> {
          activities.push(category.activities)
        })
        setCategories(categories)
        setActivities(activities.flat())
      })
  },[isLogged])


  console.log('cat',categories)
  console.log('activities', activities)
  //handle edit experience comment, executed in CategoryShow PopupEditForm comp.



  console.log('user', user)
  return (
    <Provider store={store}>
      <div className="app">
      {user && <Navigation setIsLogged={setIsLogged} setUser={setUser}/>}
      <Routes>
        <Route element={<Login setIsLogged={setIsLogged} setUser={setUser}/>} path="/login"/>
        <Route element={<SignUp setUser={setUser}/>} path="/signup"/>
        {user && <Route element={<Profile user={user} setUser={setUser}/>} path="/profile"/>}
        {user && category_query && <Route element={<Categories categories={category_query}/>} path="/categories"/>}
        {user && <Route element={<CategoryShow categories={category_query} user={user} />} path="/categories/:id"/>}
        {user && <Route element={<Activities activities={activities}/>} path="/activities"/>}
        <Route element={<Home user={user}/>} exact path="/"/>
      </Routes>
      </div>
    </Provider>
   
  );
}

export default App;
