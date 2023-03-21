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
  const activities=[]

  //This useQuery currently working for categories and category show page AND activities
  //Able to store activities in array activities above
  const {
    status: categories_status,
    error: categories_error,
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
        dat.activities.map((acti)=> {
          act.push(acti)
        })
      })
      activities.push(act)
      return data
    }
  })


  // const [category, setCategory] = useState(categories_query.data)
  // console.log('query', categories_query.data)

  // console.log('activities_query', activities_query)

  // console.log('status', categories_status)
  // console.log('error', categories_error)


  // console.log('just console.log', store.getState())
  // store.subscribe(function(){
  //   // debugger
  //   const state = store.getState()
  //   console.log('in subscribe', state)
  // })

  const [user, setUser]= useState(null)
  const [isLogged, setIsLogged] = useState(false)

  // **USER USEQUERY NOT WORKING 

  // const {
  //   status: user_status,
  //   error: user_error,
  //   data: user_query
  // } = useQuery("me", () => {
  //   fetch("/me")
  //   .then(resp => {
  //     resp.json()
  //   })
  // }, {
  //   select: (data)=> {
  //     if (data.ok){
  //       console.log(data, 'ok')
  //     }
  //     else {
  //       console.log(data, 'not ok')
  //     }
  //   }
  // })
  // console.log('user query boolean, true', !user_query)
  // console.log('user status', user_status)



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
  console.log('state',query)


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
        {user && category_query && <Route element={<CategoryShow categories={category_query} user={user} />} path="/categories/:id"/>}
        {user && activities && <Route element={<Activities activities={activities.flat()}/>} path="/activities"/>}
        <Route element={<Home user={user}/>} exact path="/"/>
      </Routes>
      </div>
    </Provider>
   
  );
}

export default App;
