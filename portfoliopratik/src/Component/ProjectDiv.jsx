import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

let KeeperApp = {
    "projectName": "Google Keep Clone App",
    "projectDate": "May - June 2021",
    "projectDescription": "Designed and developed UI/UX to look and function like Google’s keep note taking app.",
    "githubLink": "https://github.com/iampratikdeo/keeper-App",
    "live": "https://iampratikdeo.github.io/keeper-App/",
    "technologies":"React, Nodejs, HTML, CSS"
}
let Parser = {
    "projectName": "Parser for Gedcom file",
    "projectDate": "January - May 2020",
    "projectDescription": "Created a parser for Gedcom file format. Developed more features on the parser.",
    "githubLink": "https://github.com/mahir-d/ssw555tmDammp2020spring",
    "live": "",
    "technologies":"Python"
}
let news = {
    "projectName": "Recommendation WApp",
    "projectDate": "August - December 2020",
    "projectDescription": "Formulated framework for web app to recommend articles to user based on their prior interests.",
    "githubLink": "https://github.com/podkolzinmir/CS-546-Final-Project",
    "live": "",
    "technologies":"MongoDB, Node.js, Express.js, HTML, CSS"
}

function ProjectDiv(){
    
    return (
        <div id="projects"style={{height: 520, backgroundColor: "#e6e8e8"}}>
            <h2 style={{paddingLeft: 240, fontSize: 40, paddingTop: 40}}>My Work</h2><br></br>
            <Row style={{height: 350}}>
                <Col xs={2}></Col>
                <Col xs={3}>
                    <ProjectCard project = {KeeperApp}/>
                </Col>
                <Col xs={3}><ProjectCard project={Parser}/></Col>
                <Col xs={3}><ProjectCard project={news}/></Col>
                <Col xs={1}></Col>
            </Row>
        </div>
    )
}

export default ProjectDiv;