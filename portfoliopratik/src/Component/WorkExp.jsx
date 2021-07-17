import React from "react";
import { Col, Row } from "react-bootstrap";
import style from './WorkExp.module.css';

function WorkExp(){

    return(
        <div className={style.main}>
            <Row>
                <Col xs={2}></Col>
                <Col sx={10}>
                <h2 style={{fontSize: 40,paddingTop: 25, color:"white"}}>Work Experience</h2>
                <h3 style={{fontSize: 30,paddingTop: 15, color:"white"}}>Internship</h3>
                <h4 style={{fontSize: 28,paddingTop: 5, color:"white"}}>Inspire Academy</h4>
                <h5 style={{color:"white"}}>Web Developer Intern, January 2019 - June 2019</h5>
                <h6 style={{color:"white"}}>Technologies: HTML, CSS, JavaScript, React</h6>
                <p style={{color:"white"}}>
                - Developing a web application used by students to take tests, used by parents to view the results of the tests<br></br>
                - Responsible for planning and designing the user interface and user experience (UI/UX)<br></br>
                - Performed requirement gathering and brainstorming layout design <br></br>
                - Developed features on the backend and reusable components on the frontend using react<br></br>
                - Technologies used: HTML5, CSS, PHP, MySQL, React (later Angular)<br></br>
                </p>
                </Col>
            </Row>

        </div>
    )

}

export default WorkExp;