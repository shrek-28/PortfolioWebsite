import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavigationBar.css'; // Import custom styles
import { handleNavbarScroll } from './script'; // Import the script.js function

function NavigationBar() {
  useEffect(() => {
    // Call the function to handle the scroll event
    handleNavbarScroll();

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Navbar expand="lg" className="position-fixed w-100">
      <Container fluid>
        <Navbar.Brand className="me-auto left-align text-black">
          Shreya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">
            {/* Home Link */}
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>

            {/* About Me Link */}
            <Nav.Link as={Link} to="/#about-me" className="text-white">
              About Me
            </Nav.Link>

            {/* Portfolio Link */}
            <Nav.Link as={Link} to="/portfolio" className="text-white">
              Skills
            </Nav.Link>

            {/* Courses Link */}
            <Nav.Link as={Link} to="/courses" className="text-white">
              Courses
            </Nav.Link>

            {/* Courses Link */}
            <Nav.Link as={Link} to="/DataProjects" className="text-white">
              Projects
            </Nav.Link>

            {/* More Dropdown
            <NavDropdown title="Projects" id="basic-nav-dropdown" className="text-white">
              <NavDropdown.Item as={Link} to="/DataProjects">
                Data Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CodingProjects">
                Coding Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/BioProjects">
                Biology Portfolio
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* Login Link */}
            <Nav.Link as={Link} to="https://drive.google.com/drive/u/1/my-drive" className="rounded-link text-white">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
