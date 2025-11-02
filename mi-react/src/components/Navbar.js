import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assest/Images/logo.png';

function NavbarPrincipal() {
    return (
    
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="shadow-sm">
        <Container>
            <img src={logo} alt="HelioAndes Logo"  style={{width:'10%', maxWidth: '100px', minWidth: '40px'}} className="d-inline-block align-top me-2 boldText"/>
            <Navbar.Brand href="#">HelioAndes</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* esto calapsa el menu al achicar pantalla */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-center"></Nav>
                    <Nav className="justify-content-end">
                    <Nav.Link href="#">inicio</Nav.Link>
                    <Nav.Link href='#'>Servicios</Nav.Link>
                    <Nav.Link href="#">Soluciones</Nav.Link>
                    <Nav.Link href="#">Demos</Nav.Link>
                    <Nav.Link href="#">Planes</Nav.Link>
                    <Nav.Link href="#">Testimonios</Nav.Link>
                    <Nav.Link href="#">FAQ</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse> 
        </Container>
    </Navbar>  
    );
}

export default NavbarPrincipal;