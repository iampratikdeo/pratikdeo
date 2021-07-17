import React from "react";
import { Row, Col } from "react-bootstrap";
import front from './Frontsection.module.css';

function Frontsection(){
    
    return(
            <div className={front.frontsection}>
                <div>
                    <h1 className={front.heading}>Hi, my name is Pratik Deo</h1>
                    <h2 style={{textAlign:"center"}}>I am a software/Web Developer</h2>
                    <p style={{textAlign:"center", fontSize: 20}}>Changing the Web one page at a time.</p>
                </div>
                <div>
                <Row>
        <Col xs={3}></Col>
        <Col xs={1}>
            <img height="40" src="favicon.ico" alt = "react"></img>
        </Col>
        <Col xs={1}>
          <img height="58" src="nodejs.ico" alt = "nodejs"></img>
        </Col>
        <Col xs={1}>
        <img height="40" src="python.ico" alt = "nodejs"></img>
        </Col>
        <Col xs={1}>
          <img height="40" src="html.ico" alt="html"></img>
        </Col>
        <Col xs={1}>
        <img height="40" src="css.ico" alt="html"></img>
        </Col>
        <Col xs={1}>
          <img height="40" src="sql.ico" alt="sql"></img>
        </Col>
        <Col xs={1}>
          <img height="40" src="aws.ico" alt="sql"></img>
        </Col>
        <Col xs={2}></Col>
      </Row>
                </div>
            </div>
    );
}


export default Frontsection;