import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <>
       <Navbar expand="lg" className='container-fluid'style={{backgroundColor:'#48246e',color:"	#FFFFFF"}}>
      <Container>
        <Navbar.Brand href="#home">BIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/visson">Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item href="/head"className='mt-3'>Head of The Institution</NavDropdown.Item>
              <NavDropdown.Item href="/department"className='mt-3'>Departments</NavDropdown.Item>
              <NavDropdown.Item href="/rule"className='mt-3'>College Rules</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='text-center mt-3'>
          <h2 className='contact'>Contact Us</h2>
    </div>
    
    <div className='container'> 
        <div className='row mt-3'>
             <div className='col-4'>
                  <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body>
                  <Card.Title className='cardtitle mt-4'>Administration / Reception</Card.Title>
                  <Card.Text>
                    <div className='CardText'>
                    <diplay-2>Bannari Amman Institute of Technology</diplay-2>
                    <diplay-2> Sathyamangalam,TamilNadu-India</diplay-2>
                    <br></br>
                    <diplay-2>Phone-+91 4295 226000
                        +91 99429 21289
                    </diplay-2>
                    </div>
                  </Card.Text>
                  </Card.Body>
                  </Card>
             </div>

             <div className='col-4'>
                  <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body>
                  <Card.Title className='cardtitle mt-4'>Principal</Card.Title>
                  <div className='CardText'>
                     <p>Phone: 04294 - 220583</p>
                     <p>Fax: 04294 - 220087</p>
                     <p>Email: principal@bitsathy.ac.in</p>
                  </div>
                  </Card.Body>
                  </Card>
             </div>

             <div className='col-4'>
                  <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body>
                  <Card.Title className='cardtitle mt-4'>Admission Enquiry</Card.Title>
                  <div className='CardText'>
                    <p>Phone-+91 4295 226000</p>
                    <p>Phone-+91 99429 21285</p>
                  </div>
                  </Card.Body>
                  </Card>
             </div>
        </div>
    </div>
    <div className='container'> 
        <div className='row mt-3'>
             <div className='col-4'>
                  <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body>
                  <Card.Title className='cardtitle mt-4'>Training and Placement</Card.Title>
                  <Card.Text>
                    <div className='CardText'>
                    <p>Contact:86758749403</p>
                    <p>Mobile:6765456433</p>
                    <p>Email:placement.bitsathy.ac.in</p>
                    </div>
                  </Card.Text>
                  </Card.Body>
                  </Card>
             </div>

             <div className='col-4'>
                  <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body>
                  <Card.Title className='cardtitle mt-4'>Industry Institute Partnership Cell</Card.Title>
                  <div className='CardText'>
                     <p>Phone: 04294 - 220583</p>
                     <p>Fax: 04294 - 220087</p>
                  </div>
                  </Card.Body>
                  </Card>
             </div>

             <div className='col-4'>
                  <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <div className='CardText'>
                         <img src='https://placehold.co/300x200'></img>
                    </div>
                  </Card.Text>
                  </Card.Body>
                  </Card>
             
              </div>
              </div>
        </div>
        <footer className='footer mt-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-4 mt-4'>
                    <p>Bannari Amman Institute Of Technology</p>
                    <p>Alathukombai - Post,Sathyamangalam - 638 401,Erode District, Tamil Nadu, India.</p>
                    <p>+91 4295 226000</p>
                    <p>+91 99429 21289</p>
                    <p>stayahead@bitsathy.ac.in</p>
                </div>

                <div className='col-4 unstyled'>
                     <h3 className='ft mt-2'>Top Links</h3>
                     <ul>
                        <p>NAAC</p>
                        <p>AICET</p>
                        <p>NBA</p>
                        <p>UGC</p>
                        <p>DST</p>
                        <p>Anna University</p>
                     </ul>
                </div>

                <div className='col-4'>
                      <h3 className='ft mt-2'>Web links</h3>
                      <p>Mandatory Disclosure</p>
                      <p>Carriers to Apply Bit</p>
                      <p>Center of Excellence</p>
                </div>
                <hr></hr>
                <div className='text-center'>
                      <p>&copy;Bannari Amman Institute Of Technology. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Contact