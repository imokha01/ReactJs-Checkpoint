import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg"  className="bg-dark *:.text-white px-5">
            <Container fluid>
                <Navbar.Brand href="#" className='text-danger'>IMODEV </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="imo-dev">
                    <Nav
                        className="mx-auto my-2 gap-5 my-lg-0"
                        style={{ maxHeight: '500px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>About</Nav.Link>
                        <NavDropdown title="Department" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="#action3">Web Development</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Font-end Developer
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Back-End Development
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Contact Us
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;