//import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbbar() {
    return (
        <>

            <Navbar bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{color:"#BE3144", fontSize:"60px" , fontFamily:"Itim"}}> Movie  </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link  href="/"> Home </Nav.Link>
                        <Nav.Link  href="/FavList"> FavList </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
export default Navbbar;