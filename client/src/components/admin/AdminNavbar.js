import React , {useState} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import auth from '../../auth'
import './adminnavbar.css'


import Switch from "react-switch";


function AdminNavbar(props) {
const [sidebarswitch, setSideBarSwitch] = useState(true)
  let history = useHistory();


  
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-style">
        <Navbar.Brand href="#home">Ahmed Mir</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">View website</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            
          <Nav.Link>  
            
            <Switch onChange={()=>{setSideBarSwitch(!sidebarswitch);
                    props.sidebar(sidebarswitch)}} checked={sidebarswitch} />
          </Nav.Link>
            <Nav.Link href="#deets">Hello Admin</Nav.Link>
            <Nav.Link onClick={() => {
          auth.logout(() => {
            history.push("/adminlogin");
          });
        }} >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default AdminNavbar
