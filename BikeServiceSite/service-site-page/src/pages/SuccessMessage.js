// import logo from './logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import {Button, Image, Container, Nav, NavDropdown, Navbar, Row, Col, Alert, CheckCircleFill} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SuccessMessage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar  style={{ backgroundColor: '#A0C878' }}>
        <Container>
          <Navbar.Brand style={{ fontFamily: 'arial black' }} href="">BikeRep</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item >In-store repair</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/roadsiderepair">Roadside repair</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link >About</Nav.Link>
            <Nav.Link >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
      <Alert style={{ backgroundColor: '#28a745', color: 'white', fontSize: '1.2rem', maxWidth: '400px', textAlign: 'center' }}>
        <strong>Request Sent Successfully!</strong><br />
        We're on our way to assist you with your bike repair.
      </Alert>
    </Container>


      <footer>
      </footer>
  


      </header>
    </div>
  );
}

export default SuccessMessage;
