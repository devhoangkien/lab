// eslint-disable-next-line
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import { NavLink, Link } from "react-router-dom";
/**
 * @author
 * @function Header
 */

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        {/* <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">Web Builder</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/signup">Signin</Nav.Link> */}
           
            <li className="nav-item">
              <NavLink to="cards" className="nav-link">cards</NavLink>

            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
