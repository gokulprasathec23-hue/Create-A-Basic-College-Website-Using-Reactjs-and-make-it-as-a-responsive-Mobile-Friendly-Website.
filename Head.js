import React from 'react'


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';

function Head() {
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
              <NavDropdown.Item href="#"className='mt-3'>Head of The Institution</NavDropdown.Item>
              <NavDropdown.Item href="/department"className='mt-3'>Departments</NavDropdown.Item>
              <NavDropdown.Item href="/rule"className='mt-3'>College Rules</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     

     <div className='container mt-4'>
        <Card style={{width:'80rem', height:'40rem'}}>
            <Card.Body>
                <Card.Title>
                    <Card.Text>
                        <div className='row mt-4'>
                            <div className='col-3'>
                                <img src="https://placehold.co/200x200/png" ></img>
                                <display-4 className='ms-2 mt-3'>Dr.Palanisamy</display-4>
                                <br></br>
                                <display-4 className='ms-2 mt-3'>Principal BIT</display-4>
                            </div>
                            <div className='col-9 '>
                                <h3 style={{color:"#d75becff"}}>Head of the Institute</h3>
                                <p className='p-2 font-weight:200'>As a nation, reaping the demographic dividend with the largest youth population, we are at the threshold of reestablishing our legacy as a pioneer of civilization and as a leader of the world. This shall happen only by appropriately educating students, not just to be employment seekers but also be employment providers and innovators.

To ensure this, our Institution has established world-class infrastructure with an environment and ambience that will foster state-of-the-art technical education. We are achieving our motto to ‘Stay Ahead’ by providing teaching-learning and assessment systems that aim at developing higher order thinking skills; ample training on development of engineering skills; and through volunteer engagement of students in innovative practices in our special labs leading to participation in national and international competitions. We have also started numerous technical, non-technical and social clubs to cater to the physical & mental well-being, and to recreational needs of our students, while engaging them in socially productive activities. Through this plethora of activities, we could produce finest of the engineers, bridge the academia–industry divide, and naturally attract placement opportunities towards our students.

We are proud that we are providing optimal contribution to the development of our nation.

I welcome you to BIT and to all that it has to offer. Come, enlive the BIT experience!</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Title>
            </Card.Body>
        </Card>
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

export default Head