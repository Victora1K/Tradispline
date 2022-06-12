import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import { LoginScreen } from '../screens/LoginScreen'
import { logout } from '../actions/userAction'

function Header() {

    
    const userLogin = useSelector(state => state.userLogin)
    //destructure to get userInfo
    const {userInfo}= userLogin

    const dispatch = useDispatch()

    //function to handle logout
    const logoutHandler = () =>{
        dispatch(logout())
    }
    
    return (
        <header>
            <Navbar  bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container className="Header" fluid>
                    <Link to='/'>
                        <div className='brand-link-parent'>
                            <Navbar.Brand href="/"> Tradispline </Navbar.Brand>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/Survey"><i className="fa-solid fa-square-poll-horizontal"></i> SURVEY  </Nav.Link>

                            <Nav.Link href="plan/:id?"><i className="fa-solid fa-list-check"></i>  PLAN  </Nav.Link>
                            
                            {userInfo ?  (
                            
                                <NavDropdown title={userInfo.name} >
                                    
                                    <NavDropdown.Item href="profile"> Profile</NavDropdown.Item>
                    
                                    <NavDropdown.Item onClick={logoutHandler}> Logout</NavDropdown.Item>

                                </NavDropdown>
                            ):(<Nav.Link href="/Login"><i className="fas fa-user"></i> LOGIN </Nav.Link>
                            )}
                            
                           
                            
                            
                            

                            

                      
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>
    )
}

export default Header