import Container from 'react-bootstrap/Container';
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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Self/Full</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/all-categories">Categories</Nav.Link>
            <Nav.Link href="/all-activities">Activities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className='logout-button' onClick={()=> handleLogout()}>Logout</button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
