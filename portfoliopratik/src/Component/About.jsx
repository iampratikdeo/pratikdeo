import React from "react";
import styles from './About.module.css';
import { Col, Row } from "react-bootstrap";



function AboutMe(){
    return (
        <div className={styles.main}>
            <Row>
                <Col xs={2}></Col>
                <Col xs={4}>
                    <h2 style={{color:"black", fontSize: 40,paddingTop: 30}}>About Me</h2>
                    <p style={{color:"black", fontSize: 20, paddingTop: 20}}>
                    
                    I am a self-driven, result-oriented computer science graduate 
                    with 2 years of academic experience seeking new challenges as entry level software developer.<br></br> <br></br> 
                    My goal is to solve complex problems using software and by collaborating with like-minded people. 
                    I love coding in a fun and immersive way.
                    </p>
                </Col>
                <Col xs={4}>
                    <img className={styles.img} alt="nothing" height="410" src="me.png"></img>
                </Col>
                <Col xs={2}></Col>
            </Row>
            
        </div>
    )
}

export default AboutMe;