import react from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { redirect} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<Home/>} exact path="/"/>
      </Routes>
    </div>
  );
}

export default App;
