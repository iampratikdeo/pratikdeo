import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Education.module.css';

function Education(props){
    return (
        <div className={styles.main}>
            <h2 style={{color:"white",paddingLeft: 240, fontSize: 40, paddingTop: 40}}>Education</h2><br></br>
            <Row>
                <Col xs={2}></Col>
                <Col xs={10}>
                <h2 style={{color:"white"}}>{props.school1.schoolName}</h2>
                 <h5 style={{color:"white"}}>{props.school1.degree},  {props.school1.major}</h5>
                 <h6 style={{color:"white"}}> {props.school1.address} - {props.school1.year}</h6>
                 <br></br>
                </Col>   
            </Row>
            <Row>
            <Col xs={2}></Col>
                 <Col xs={10}>
                 <h2 style={{color:"white"}}>{props.school2.schoolName}</h2>
                 <h5 style={{color:"white"}}>{props.school2.degree},  {props.school2.major}</h5>
                 <h6 style={{color:"white"}}> {props.school2.address} - {props.school2.year}</h6>
                 <p style={{color:"white"}}>
                     Revelant Coursework: Data Structures, Database Management System, Special Topics - Python, Agile Methodologies for Software development,
                     Web Development, Human Machine Interaction.
                 </p>
                </Col>
            </Row>
            
        </div>
    )
}

export default Education;





                