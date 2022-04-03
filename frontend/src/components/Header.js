import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container className="Header" fluid>
                    <Link to='/'>
                        <Navbar.Brand href="/"> Tradispline </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/Survey"><i className="fa-solid fa-square-poll-horizontal"></i> SURVEY  </Nav.Link>
                            
                            <Nav.Link href="/Todo"><i className="fa-solid fa-list-check"></i>  TO-DO  </Nav.Link>
                            <Nav.Link href="/Login"><i className="fas fa-user"></i> LOGIN </Nav.Link>
                            
                            <NavDropdown title="TO-DO"
                              menuVariant="dark">
                              <NavDropdown.Item href="Scalp/">Scalp</NavDropdown.Item>
                              <NavDropdown.Item href="Daytrade/">Daytrade</NavDropdown.Item>
                              <NavDropdown.Item href="Swing/">Swing</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </header>
    )
}

export default Header