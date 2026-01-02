import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


import { Card } from 'react-bootstrap';
function Department() {
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
              <NavDropdown.Item href="head"className='mt-3'>Head of The Institution</NavDropdown.Item>
              <NavDropdown.Item href="#"className='mt-3'>Departments</NavDropdown.Item>
              <NavDropdown.Item href="/rule"className='mt-3'>College Rules</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='text-center mt-4' style={{color:"#48246e"}}>
       <h2>Department</h2>
    </div>


    <div className='container mt-4'>
       <div className='row'>
        <div className='col-3'>
             <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className="p-2 mt-4 text-center fw-bold">
                    <Link to="/agri" className="text-decoration-none text-dark">
                     Agriculture Engineering
                     </Link>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
            <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                      <Link to="/agri" className="text-decoration-none text-dark">
                        Aeronatical Engineering
                     </Link>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
             <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                         <Link to="/biomedical" className="text-decoration-none text-dark">
                           BioMedical Engineering
                         </Link>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
             <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <Link to="/biotech" className="text-decoration-none text-dark">
                           Biotech Engineering
                         </Link>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
       </div>
    </div>



    <div className='container mt-4'>
       <div className='row'>
        <div className='col-3'>
            <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Civil Engineering</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
             <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>computer Science and Engineering</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
            <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Computer Science and design</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
            <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Information Technology</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
       </div>
    </div>


    <div className='container mt-4'>
       <div className='row'>
        <div className='col-3'>
             <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Electronics and Communication Engineering</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
            <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Electrical and Electronics Engineering</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
             <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Electrical and Instrumental Engineering</p>
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
        <div className='col-3'>
            <Card style={{width:'15rem',height:'10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <img src="https://placehold.co/60x40"></img>
                    </Card.Title>
                    <Card.Text className='p-2px mt-4 ml-2 text-center fw-bold'>
                        <p>Mechanical Engineering</p>
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

export default Department