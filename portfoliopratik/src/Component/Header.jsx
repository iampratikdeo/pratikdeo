import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import na from './Frontsection.module.css'

function HandleClick (props)  {
    return (<button onClick={() => window.open(props.openUrl)}>{props.openUrl} </button>)
  }

function Header(){
    return(
        <Navbar className={na.navColor} variant="light">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="center">
                        <Nav.Link href="#projects" style={{paddingLeft: 20, paddingRight: 20}}>My Work</Nav.Link>
                        <Nav.Link onClick={()=> window.open("https://drive.google.com/file/d/1_uwq9dGEOw4RMDcbDuipchEea7eXDz5M/view?usp=sharing")} style={{paddingLeft: 20, paddingRight: 20}}>Resume</Nav.Link>
                 </Nav>
            </Container>
        </Navbar>
    );
}



export default Header;