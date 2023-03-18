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

function App() {
  const store = createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // console.log('just console.log', store.getState())
  // store.subscribe(function(){
  //   // debugger
  //   const state = store.getState()
  //   console.log('in subscribe', state)
  // })


  const [user, setUser]= useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [categories, setCategories]= useState(null)

  //keeps user logged in
  useEffect(()=> {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then((user)=> {
          setUser(user)
          // store.dispatch({type:'LOGIN'})
          // store.dispatch({type:'SET_USER', payload: user})
          console.log('useEffect', user)
        })
      }
    })
  }, [isLogged])

  console.log('isLogged', isLogged)

  //gets all the categories
  useEffect(()=> {
    fetch("/categories").then(
      r=>r.json()
      ).then((categories) => {setCategories(categories)})
  },[isLogged])


  console.log('cat',categories)
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
        {user && <Route element={<Categories categories={categories}/>} path="/categories"/>}
        {user && <Route element={<CategoryShow categories={categories} user={user} />} path="/categories/:id"/>}
        <Route element={<Home user={user}/>} exact path="/"/>
      </Routes>
      </div>
    </Provider>
   
  );
}

export default App;
