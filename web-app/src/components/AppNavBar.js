import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function NavBarC() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Vaccination Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact to="/" className="nav-link mx-2" activeClassName="active">
                                Home
                            </NavLink>

                            <NavLink exact to="/Register" className="nav-link mx-2" activeClassName="active">
                                Register
                            </NavLink>
                            <NavLink exact to="/Summary" className="nav-link mx-2" activeClassName="active">
                                Summary
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarC;
