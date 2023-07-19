import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './CartWidget/Cartwidget';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>PlayG</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/'} className='rutas'>Inicio</Link>

                        <Link to={'/category/juegos'} className='rutas'>Juegos</Link>
                        <Link to={'/category/consolas'} className='rutas'>Consolas</Link>

                        <Link to={'/Cartwidget'} className='car'><Cartwidget /></Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;