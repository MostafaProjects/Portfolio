import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Image, Container, Nav, NavDropdown, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    
    <div className="Home">
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

      <Container >
        <Row className="mt-4">
        <Col className=" intro-service d-flex flex-column justify-content-center" sm={7}>
          <div className="text-center " style={{ fontFamily: 'arial black' }}><h1>BikeRep</h1></div>
          <div className=" d-flex justify-content-center">
            <p className="intro-service ">
              We fix bikes. From flat tires to full tune-ups, we make sure your ride is smooth, safe, and ready to go. Whenever your bike breaks down, we're ready to repair your bike!
            </p>
          </div>
        </Col>
        <Col sm={5}><Image src="/BikeHomePic.jpg" width="300" height="300" fluid rounded /></Col>
      </Row>
      </Container>

      <Container>
        <div className="text-center mt-3"> 
          <h2>Our Services</h2>
        </div>
        <Row className="mt-3 " >
        <Col className='d-flex flex-column align-items-center' md={6}><Image className="pic-service" src="/BikeAppointmentService.jpg" roundedCircle /></Col>
        <Col className="p-5 d-flex flex-column align-items-center" md={6} style={{ backgroundColor: '#27667B', color: 'white' }}>
          <h2>In-Store Repair</h2>
          <p>Quickly schedule an appointment at your local bike shop! Pick a convenient time, describe your bike issue, and bring it in for expert repairs and maintenance.
             Perfect for tune-ups, fixes, and part replacements. </p>
          <Button style={{ backgroundColor: '#DDEB9D', color: 'black', border: 'none' }}>Book Appointment</Button>
        </Col>
      </Row>

      <Row className="mt-3 " >
        <Col className="p-5 d-flex flex-column align-items-center" md={6} style={{ backgroundColor: '#27667B', color: 'white' }}>
          <h2>Roadside Bike Repair</h2>
          <p>Fast, convenient bike repairs wherever you are! Whether it’s a flat tire, broken chain, or brake issue, our mobile bike repair team comes to your location to get you back on the road quickly.
             Perfect for commuters, weekend riders, and cyclists on the go.</p>
          <Button as={Link} to="/roadsiderepair" style={{ backgroundColor: '#DDEB9D', color: 'black', border: 'none' }}>Get Immediate Assistance</Button>
        </Col>
        <Col className='d-flex flex-column align-items-center' md={6}><Image className="pic-service" src="/RoadsideService.jpg" roundedCircle /></Col>
      </Row>

      </Container>

      <footer>
      </footer>
  


      </header>
    </div>
  );
}

export default Home;
