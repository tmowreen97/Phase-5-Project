import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';

function Navigation({setUser, setIsLogged}) {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  function handleLogout(e){
    e.preventDefault()
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r)=>{
      if(r.ok){
        setUser(null)
        dispatch({type:'LOGOUT'})
        navigate("/")
      }
    })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Self/Full</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/add-experience">Add Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button onClick={(e)=> handleLogout(e)}>Logout</button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
