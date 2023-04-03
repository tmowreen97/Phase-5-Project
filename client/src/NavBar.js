import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './App';
import { useMutation } from 'react-query';
import axios from 'axios';



function Navigation() {
  const {setUser} = useContext(AppContext)
  const navigate = useNavigate()


  const logoutUser = useMutation(()=> {
    return (
      axios.delete('/logout')
      .then(resp => resp.data)
    )
  }, {
    onSuccess: ()=> {
      setUser(null)
      navigate("/")
    }
  }
  )

  function handleLogout(){
    logoutUser.mutate()
  }

  return (
    <div className='nav-bar'>
    <Navbar bg="light" expand="lg" className='nav-bar' >
      <Container>
        <Navbar.Brand href="/">Self/Full</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' href="/profile">Profile</NavLink>
            <NavLink className='nav-link' href="/all-categories">Categories</NavLink>
            <NavLink className='nav-link' href="/all-activities">Activities</NavLink>
          </Nav>
          <Button variant="light" className='logout-button' onClick={()=> handleLogout()}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}



export default Navigation;

function NavLink({ href, children}){
  const path= window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>
        {children}
      </a>
    </li>
  )

}

