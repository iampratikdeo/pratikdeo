import React from 'react';
import {Card, Button} from 'react-bootstrap';
import styles from './ProjectCard.module.css';

function ProjectCard(props){
    console.log(props.project.projectName);
    return (
        <Card style={{ width: '300px' , marginLeft: 15, marginTop: 0}}>
                <Card.Body>
                    <Card.Title>{props.project.projectName}</Card.Title>
                        <Card.Text>{props.project.projectDate}</Card.Text>
                        <Card.Text>{props.project.projectDescription}</Card.Text>
                        <Button variant="primary" href={props.project.live}>Go somewhere</Button>
                </Card.Body>
            </Card>
        
    )
}

export default ProjectCard;