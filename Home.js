import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';




function Home() {
  return (
    <>
      <Navbar expand="lg" className='container-fluid'style={{backgroundColor:'#48246e'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:"	#FFFFFF"}}>BIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" style={{color:"	#FFFFFF"}}>Home</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown"  style={{color:"	#fff !Important"}}>
              <NavDropdown.Item href="/visson" >Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item href="/head"className='mt-3'>Head of The Institution</NavDropdown.Item>
              <NavDropdown.Item href="/department"className='mt-3'>Departments</NavDropdown.Item>
              <NavDropdown.Item href="/rule"className='mt-3'>College Rules</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact"  style={{color:"	#FFFFFF"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div className='container mt-4 text-center'>
         <h1 className="elegant-text">
          Explore the Achievements of Our College and Students
         </h1>
         
         <div>
             <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placehold.co/2000x400/png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placehold.co/2000x400/png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placehold.co/2000x400/png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    </div>
    {/* body start */}
    <div className='container mt-4'>
        <div className='row'>
             <div className='col-8'>
                <h1 className='Bold'>About BIT</h1>
                <p>
                    Bannari Amman Institute of Technology is an Autonomous, Self-financing Engineering College, Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai. Nestled on the banks of The River Bhavani, BIT campus provides environment for learning in harmony with nature, away from the odds of the city life. The spacious and the earth hugging buildings punctuated with landscaped courtyards and pathways are designed to emphasise the business ethics and or characteristics of an excellent centre for learning. The Campus hosts well planned academic blocks, computer centres, lecture halls, libraries, laboratories, conference halls, staff quarters, hostels and students' centres. The Campus also houses a co-operative store, ATM (Axis, SBI and KVB) and a clinic to attend to the general health of the students and staff.
                </p>
                <button className='justify-content-center'style={{backgroundColor:"blue",color:"white"} }>Know More</button>
             </div>
             <div className='col-2'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UFUP1S_IxeY?si=oO9v8863JphlUllF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
        </div>
    </div>

    <div className='container mt-3'>
          <div className='row'>
            <div className='col-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://placehold.co/400x300/png" />
                <Card.Body>
                <Card.Title>Special Labs</Card.Title>
                <Card.Text>
                        Fostering innovations and advancing skills for a better tomorrow.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
          </div>

          <div className='col-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://placehold.co/400x300/png" />
                <Card.Body>
                <Card.Title>Placements</Card.Title>
                <Card.Text>
                       Realizing what you are good at starts with finding what you're passionate.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
          </div>

          <div className='col-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://placehold.co/400x300/png" />
                <Card.Body>
                <Card.Title>Achievements</Card.Title>
                <Card.Text>
                       Realizing what you are good at starts with finding what you're passionate.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
          </div>
           <div className='col-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://placehold.co/400x300/png" />
                <Card.Body>
                <Card.Title>Achievements</Card.Title>
                <Card.Text>
                       Realizing what you are good at starts with finding what you're passionate.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
          </div>
          </div>
    </div>

    {/* footer */}
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

export default Home