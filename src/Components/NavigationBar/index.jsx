import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/bigSalsaFestival.webp';
import './navbar.scss'

export default function NavigationBar () {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                                <Image src={logo} height='auto' width={175} fluid/>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="appNavBar" />
                    <Navbar.Collapse id="appNavBar">
                        <Nav className="me-auto">
                        <NavDropdown title="New York" id="NewYork">
                                <NavDropdown.Item target='_blank' href="https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427">Purchase Pass</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://book.passkey.com/event/50552668/owner/6708/home">Book Hotel</NavDropdown.Item>
                            {/* <LinkContainer to="/NewYork/perform">
                                <NavDropdown.Item href="#action/3.2">Schedule</NavDropdown.Item>
                            </LinkContainer> */}
                            <LinkContainer to="/NewYork/Perform">
                                <NavDropdown.Item>Performer</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/NewYork/Vendor">
                                <NavDropdown.Item href="#action/3.3">Vendors</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/NewYork/Volunteer">
                                <NavDropdown.Item href="#action/3.3">Volunteers</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="San Diego" id="SanDiego">
                                <NavDropdown.Item target='_blank' href="https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427">Purchase Pass</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://book.passkey.com/event/50552668/owner/6708/home">Book Hotel</NavDropdown.Item>
                            {/* <LinkContainer to="/SanDiego/perform">
                                <NavDropdown.Item href="#action/3.2">Schedule</NavDropdown.Item>
                            </LinkContainer> */}
                            <LinkContainer to="/SanDiego/Perform">
                                <NavDropdown.Item>Performer</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/SanDiego/Vendor">
                                <NavDropdown.Item href="#action/3.3">Vendors</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/SanDiego/Volunteer">
                                <NavDropdown.Item href="#action/3.3">Volunteers</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/SanDiego/Schedule">
                                <NavDropdown.Item href="#action/3.3">Schedule</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="Houston" id="Houston">
                                <NavDropdown.Item target='_blank' href="https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427">Purchase Pass</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://book.passkey.com/event/50552668/owner/6708/home">Book Hotel</NavDropdown.Item>
                            {/* <LinkContainer to="/Houston/perform">
                                <NavDropdown.Item href="#action/3.2">Schedule</NavDropdown.Item>
                            </LinkContainer> */}
                            <LinkContainer to="/Houston/Perform">
                                <NavDropdown.Item>Performer</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/Houston/Vendor">
                                <NavDropdown.Item href="#action/3.3">Vendors</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/Houston/Volunteer">
                                <NavDropdown.Item href="#action/3.3">Volunteers</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <Nav.Link href="/">Transfers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
  }