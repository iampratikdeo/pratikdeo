import React from 'react';
import {Card, Button} from 'react-bootstrap';
import styles from './ProjectCard.module.css';

function ProjectCard(props){
    console.log(props.project.projectName);
    return (
        <Card className={styles.card} style={{ width: '300px' , marginLeft: 15, marginTop: 0}}>
                <Card.Body>
                    <Card.Title>{props.project.projectName}</Card.Title>
                        <Card.Text style={{borderBottom:"1px solid black", fontSize: 15}}>{props.project.projectDate}</Card.Text>
                        <Card.Text>{props.project.projectDescription}</Card.Text>
                        <Card.Text style={{fontSize: 14, fontWeight: "bold"}}>Technologies: {props.project.technologies}</Card.Text>
                        <button className={styles.button5} onClick={()=> window.open(props.project.live)}>Demo</button>
                        <button style={{marginLeft: 10}} className={styles.button5} onClick={()=> window.open(props.project.githubLink)}>GitHub</button>
                </Card.Body>
            </Card>
        
    )
}

export default ProjectCard;