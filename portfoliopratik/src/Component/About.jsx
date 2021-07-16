import React from "react";
import styles from './About.module.css';
import { Col, Row } from "react-bootstrap";



function AboutMe(){
    return (
        <div className={styles.main}>
            <Row>
                <Col xs={2}></Col>
                <Col xs={4}>
                    <h2 style={{color:"white", fontSize: 40,paddingTop: 25}}>About Me</h2>
                    <p style={{color:"white", fontSize: 20, paddingTop: 20}}>
                    My goal is to solve complex problems using software and by collaborating with like-minded people. 
                    I love coding in a fun and immersive way
                    </p>
                </Col>
                <Col xs={4}>
                    <img className={styles.img} alt="nothing" src="logo192.png"></img>
                </Col>
                <Col xs={2}></Col>
            </Row>
            
        </div>
    )
}

export default AboutMe;