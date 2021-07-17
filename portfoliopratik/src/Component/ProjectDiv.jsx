import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

let KeeperApp = {
    "projectName": "Google Keep CLone App",
    "projectDate": "May - June 2021",
    "projectDescription": "Project description",
    "githubLink": "https://github.com/iampratikdeo/keeper-App",
    "live": "https://iampratikdeo.github.io/keeper-App/"
}
let Parser = {
    "projectName": "Parser for Gedcom file",
    "projectDate": "January - May 2020",
    "projectDescription": "Project description",
    "githubLink": "https://github.com/mahir-d/ssw555tmDammp2020spring",
    "live": ""
}

function ProjectDiv(){
    
    return (
        <div style={{height: 420, backgroundColor: "#e6e8e8"}}>
            <h2 style={{paddingLeft: 240, fontSize: 40, paddingTop: 40}}>My Work</h2><br></br>
            <Row style={{height: 350}}>
                <Col xs={2}></Col>
                <Col xs={3}>
                    <ProjectCard project = {KeeperApp}/>
                </Col>
                <Col xs={3}><ProjectCard project={Parser}/></Col>
                {/*<Col xs={3}><ProjectCard project={null}/></Col> */}
                <Col xs={1}></Col>
            </Row>
        </div>
    )
}

export default ProjectDiv;