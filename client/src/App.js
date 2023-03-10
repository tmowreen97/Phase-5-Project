import react, { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import Profile from './Profile';
import Navigation from './NavBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { redirect} from 'react-router-dom';
import Categories from './Categories';

function App() {

  const [user, setUser]= useState([])

  useEffect(()=> {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then((user)=> setUser(user))
      }
    })
  }, [])


  console.log('user', user)
  return (
    <div className="App">
      {user && <Navigation setUser={setUser}/>}
      <Routes>
        <Route element={<Login setUser={setUser}/>} path="/login"/>
        <Route element={<SignUp setUser={setUser}/>} path="/signup"/>
        <Route element={<Profile user={user} setUser={setUser}/>} path="/profile"/>
        <Route element={<Categories/>} path="/categories"/>
        <Route element={<Home user={user}/>} exact path="/"/>
      </Routes>
    </div>
  );
}

export default App;
