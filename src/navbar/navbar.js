import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

function NavBar() {
    const { cart } = useCart();
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>PlayG</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/'} className='rutas'>Inicio</Link>

                        <Link to={'/category/juegos'} className='rutas'>Juegos</Link>
                        <Link to={'/category/consola'} className='rutas'>Consolas</Link>

                        <Link to={'/cart'} className='rutas'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>{cart.length}</span>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;