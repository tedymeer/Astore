import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
function AdminNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ahmed Mir</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">View website</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Hello Admin</Nav.Link>
            <Nav.Link href="#memes">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default AdminNavbar
