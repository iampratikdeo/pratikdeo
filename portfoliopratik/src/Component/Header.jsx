import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import reactDom from 'react-dom';
import na from './Frontsection.module.css'

function Header(){
    return(
        <Navbar className={na.navColor} variant="light">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="center">
                        <Nav.Link href="#home" style={{paddingLeft: 20, paddingRight: 20, color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{paddingLeft: 20, paddingRight: 20, color: "white"}}>Projects</Nav.Link>
                        <Nav.Link href="#pricing" style={{paddingLeft: 20, paddingRight: 20, color: "white"}}>Resume</Nav.Link>
                 </Nav>
            </Container>
        </Navbar>
    );
}



export default Header;