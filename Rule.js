import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {Card} from 'react-bootstrap';
function Rule() {
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
              <NavDropdown.Item href="#"className='mt-3'>College Rules</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
     <div className='container'>
          <div className='row mt-4'>
              <div className='col'>
                  <Card style={{width:'75rem',height:'20rem'}}>
                    <Card.Body className='text-center mt-4'>
                        <div className='row'>
                        <div className='col-4 text-center mt-4' style={{backgroundColor:'#48246e'}}>
                            <h4 style={{color:"yellow"}}>College Rules</h4>
                         </div>
                        <div className='col-1'>
                          <h3 className='v-lines'></h3>
                        </div>
                         <div className='col-7'>
                   <p>
                    Colleges follow a set of general rules to maintain discipline, academic excellence, and a respectful learning environment. Students are expected to attend classes regularly and maintain the minimum required attendance to be eligible for examinations. Proper dress code and punctuality must be followed inside the campus. Mobile phones and electronic gadgets should be used only for academic purposes. Any form of misconduct, ragging, or harassment is strictly prohibited, and strict action will be taken against those who violate the rules. Students should respect faculty members, staff, and fellow students, and must take responsibility for maintaining cleanliness and campus property. Adherence to examination rules and ethical behavior is mandatory for all students.
                   </p>
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
                  <Card style={{width:'75rem',height:'20rem'}}>
                    <Card.Body className='text-center mt-4'>
                        <div className='row'>
                        <div className='col-4 text-center mt-4' style={{backgroundColor:'#48246e'}}>
                            <h4 style={{color:"yellow"}}>Hostel Rules</h4>
                         </div>
                        <div className='col-1'>
                          <h3 className='v-lines'></h3>
                        </div>
                         <div className='col-7'>
                   <p>
                    Colleges follow a set of general rules to maintain discipline, academic excellence, and a respectful learning environment. Students are expected to attend classes regularly and maintain the minimum required attendance to be eligible for examinations. Proper dress code and punctuality must be followed inside the campus. Mobile phones and electronic gadgets should be used only for academic purposes. Any form of misconduct, ragging, or harassment is strictly prohibited, and strict action will be taken against those who violate the rules. Students should respect faculty members, staff, and fellow students, and must take responsibility for maintaining cleanliness and campus property. Adherence to examination rules and ethical behavior is mandatory for all students.
                   </p>
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

export default Rule