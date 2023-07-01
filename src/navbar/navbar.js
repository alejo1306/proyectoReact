import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './CartWidget/Cartwidget';
function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">PlayG</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='rutas' href="#home">Juegos</Nav.Link>
                        <Nav.Link className='rutas' href="#features">Consolas</Nav.Link>
                        <Nav.Link className='car' href="#pricing"><Cartwidget /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;