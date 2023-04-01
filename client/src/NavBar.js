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
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/all-categories">Categories</Nav.Link>
            <Nav.Link href="/all-activities">Activities</Nav.Link>
          </Nav>
          <Button variant="light" className='logout-button' onClick={()=> handleLogout()}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <button className='logout-button' onClick={()=> handleLogout()}>Logout</button> */}

    </div>

  );
}

export default Navigation;
