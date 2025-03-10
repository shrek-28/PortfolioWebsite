import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom styles for footer

function Footer() {
  return (
    <footer className="footer text-white py-4">
      <Container>
        <Row>
          {/* Let's Connect section */}
          <Col md={6} className="mb-4 mb-md-0">
            <h4>Let's Connect</h4>
            <p>Feel free to reach out or connect with me on the platforms below:</p>
          </Col>
          
          {/* Social Links section */}
          <Col md={6} className="social-links">
            <a href="https://github.com/shrek-28" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shreyasree-g/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.hackerrank.com/profile/shreyagopal28" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-hackerrank"></i> Hackerrank
            </a>
            {/* Add more social links here */}
          </Col>
        </Row>
        <Row>
          {/* Footer Copyright */}
          <Col md={12} className="text-center">
            <p>© {new Date().getFullYear()} Shreyasree G. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
