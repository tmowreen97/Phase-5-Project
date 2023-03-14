import react, { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import Profile from './Profile';
import Navigation from './NavBar';
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

  console.log(store.getState())
  store.subscribe(function(){
    // debugger
    const state = store.getState()
    console.log(state)
  })


  const [user, setUser]= useState(null)

  useEffect(()=> {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then((user)=> {
          setUser(user)
          store.dispatch({type:'LOGIN'})
        })
      }
    })
  }, [])


  console.log('user', user)
  return (
    <Provider store={store}>
      <div className="App">
      {user && <Navigation setUser={setUser}/>}
      <Routes>
        <Route element={<Login setUser={setUser}/>} path="/login"/>
        <Route element={<SignUp setUser={setUser}/>} path="/signup"/>
        {user && <Route element={<Profile user={user} setUser={setUser}/>} path="/profile"/>}
        <Route element={<Categories/>} path="/categories"/>
        <Route element={<Home user={user}/>} exact path="/"/>
      </Routes>
      </div>
    </Provider>
   
  );
}

export default App;
