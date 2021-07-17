import React from "react";
import { Col, Row } from "react-bootstrap";
import style from './Certifications.module.css';

function Certifications(){
    return(
        <div className={style.main}>
            <h2 style={{paddingLeft: 240, fontSize: 40, paddingTop: 40}}>Certifications</h2><br></br>
            <Row>
                <Col xs={2}></Col>
                <Col xs={4}>
                    <img className={style.image_center} src="aws-certified-developer-associate (1).png" alt="aws cloud practitioner"></img>
                    <h4 style={{ paddingTop: 10, paddingLeft: 10}}>AWS Certified Developer Associate</h4>
                    <p style={{ paddingLeft: 55}}> Achieved On: September 18 2020 <br></br> Valid through: September 18 2023</p>
                </Col>
                <Col xs={4}>
                <img className={style.image_center} src="aws-certified-cloud-practitioner (1).png" alt="aws cloud practitioner"></img>
                <h4 style={{ paddingTop: 10, paddingLeft: 10}}>AWS Certified Cloud Practitioner</h4>
                <p style={{ paddingLeft: 55}}> Achieved On: June 29 2020 <br></br> Valid through: September 18 2023</p>
                </Col>
                <Col xs ={2}></Col>
            </Row>
        </div>
    )
}

export default Certifications;