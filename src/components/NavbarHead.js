import React from 'react'
import { Container, Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";

function NavbarHead() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="" variant="danger" className="shadow-sm p-3 mb-5 bg-white rounded">
        <Container className="me-auto">
          <Navbar.Brand href="#home" className="text-success">K   U   S   I  N   I</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end mr-2">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="text-secondary">Home</Nav.Link>
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">"We are who we are!</Tooltip>}>
                <Nav.Link href="#about" className="text-secondary">About us</Nav.Link>
              </OverlayTrigger>
              <Nav.Link href="#products" className="text-secondary">Products</Nav.Link>
              <Nav.Link eventKey={2} href="#services" className="text-secondary">
                Services
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarHead