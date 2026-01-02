import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Visson() {
  return (
    <>
     <Navbar expand="lg" className='container-fluid'style={{backgroundColor:'#48246e'}}>
      <Container>
        <Navbar.Brand href="#home">BIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{color:	"#FFFFFF"}}>Home</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item href="/head"className='mt-3'>Head of The Institution</NavDropdown.Item>
              <NavDropdown.Item href="/department"className='mt-3'>Departments</NavDropdown.Item>
              <NavDropdown.Item href="/rule"className='mt-3'>College Rules</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


     <div className='mt-4'>
        <Card  className='c' style={{ width: '100rem', height: '10rem',backgroundColor: "#48246e", color:"yellow"}}>
          <Card.Body>
            <Card.Title className='text-center mt-4'>
                 <h4>Vision & Mission</h4>
            </Card.Title>
          </Card.Body>
        </Card>
     </div>

     <div className='container'>
         <div className='row mt-4'>
            <div className='col'>
                <Card  className='c' style={{ width:'85rem', height:'10rem'}}>
                <Card.Body>
                  <div className='row'>
                    <div className='col-5 text-center mt-4'>
                    <h3>Vision</h3>
                  </div>
                  <div className='col-1'>
                    <h1 className='v-line'></h1>
                  </div>
                  <div className='col-6 text-center mt-4'>
                    <p>To be a centre of excellence, providing world-class education that transforms individuals into intellectual, empathetic and responsible citizens.</p>
                 </div>
                  </div>
                 </Card.Body>
                </Card>
            </div>
         </div>
     </div>



      <div className='container'>
         <div className='row mt-4'>
            <div className='col'>
                <Card  className='c' style={{ width:'85rem', height:'20rem'}}>
                <Card.Body>
                  <div className='row'>
                    <div className='col-5 text-center mt-5'>
                    <h3>Mission</h3>
                  </div>
                  <div className='col-1'>
                    <h1 className='v-lines'></h1>
                  </div>
                  <div className='col-6 text-center mt-4'>
                    <ul className='styled'>
                      <p>To provide top of the line infrastructure that is most conducive for learning.</p>
                      <p>To engage committed members of faculty who will infuse subject knowledge with latest teaching pedagogies.</p>
                      <p>To provide state-of-the-art facilities to the members of faculty and student fraternity to access and engage in diligent research.</p>
                      <p>To collaborate the best minds in the industries with the academia of the college thereby empowering the students to meet the global standards.</p>
                    </ul>
                  </div>
                  </div>
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

export default Visson