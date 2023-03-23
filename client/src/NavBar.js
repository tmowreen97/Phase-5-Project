import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { AppContext } from './App';
import { useMutation, useQuery, useQueryClient } from 'react-query';



function Navigation() {
  const {setUser, setIsLogged, user} = useContext(AppContext)
  console.log('in nav bar', user)

  const navigate = useNavigate()

  // const{
  //   status,
  //   error,
  //   data
  // } = useQuery("logout", async () => {
  //   const response = await fetch("/logout", {
  //     method: 'DELETE'
  //   })
  //   if (!response.ok) {
  //     throw new Error('Logout Error')
  //   }
  //   return response.json()
  // })

  const queryClient = useQueryClient()


  // const deletePost = useMutation(()=> {
  //   fetch("/logout", {
  //     method: 'DELETE'
  //   })
  //   queryClient.invalidateQueries()
  //   navigate("/")
  // })

  function handleLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r)=>{
      if(r.ok){
        setUser(null)
        setIsLogged(false)
        navigate("/")
      }
    })
  }

  //USE QUERY FORMAT FOR FETCH REQUESTS WITH ERRORS
  // useQuery({
  //   queryKey: ['todos', todoId],
  //   queryFn: async () => {
  //     const response = await fetch('/todos/' + todoId)
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok')
  //     }
  //     return response.json()
  //   },
  // })

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
            <Nav.Link href="/all-activities">All Activities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className='logout-button' onClick={()=> handleLogout()}>Logout</button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
