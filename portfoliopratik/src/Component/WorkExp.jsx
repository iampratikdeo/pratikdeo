import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import style from './WorkExp.module.css';

function WorkExp(){

    return(
        <div className={style.main}>
            <Row>
                <Col xs={2}></Col>
                <Col sx={10}>
                <h2 style={{fontSize: 40,paddingTop: 25, color:"white"}}>Work Experience</h2>
                {/* <h3 style={{fontSize: 30,paddingTop: 15, color:"white"}}>Internship</h3>
                <h4 style={{fontSize: 28,paddingTop: 5, color:"white"}}>Inspire Academy</h4>
                <h5 style={{color:"white"}}>Web Developer Intern, January 2019 - June 2019</h5>
                <h6 style={{color:"white"}}>Technologies: HTML, CSS, JavaScript, React</h6>
                <p style={{color:"white"}}>
                •	Collaborated with teammates to deliver valuable features meeting business and customer needs.<br></br>
                •	Communicated with product managers and UX designers to translate project requirements and business objectives into polished user interfaces.<br></br>
                •	Developed features on the backend and reusable components on the frontend using react.<br></br>
                •	Technologies used: HTML5, CSS, PHP, MySQL, React (later Angular).<br></br>

                </p> */}
                <Card style={{width: 1100, marginTop: 50, height: 250}}>
                    <Card.Header>Internship</Card.Header>
                    <Card.Body style={{backgroundColor: "#e6e8e8"}}>
                        <Row>
                            <Col xs = {7}>
                                <Card.Title>Inspire Academy</Card.Title>
                                <Card.Text>
                                Web Developer Intern, January 2019 - June 2020
                                </Card.Text>
                                <Card.Text>
                                •	Collaborated with teammates to deliver valuable features meeting business and customer needs.<br></br>
                •	Communicated with product managers and UX designers to translate project requirements and business objectives into polished user interfaces.<br></br>
                •	Developed features on the backend and reusable components on the frontend using react.
                                </Card.Text>
                            </Col>
                            <Col xs={5}>
                                <tr>
                                    <td style={{paddingLeft: 30}}>
                                    <div style={{backgroundColor: "#3f617b", borderRadius: "37.5px", height: "100px", width: "100px"}}>
                                        <p style={{paddingLeft: 25, paddingTop: 40, color:"white"}}>HTML5</p></div>
                                    </td>
                                    <td style={{paddingLeft: 15}}>
                                    <div style={{backgroundColor: "#3f617b", borderRadius: "37.5px", height: "100px", width: "100px"}}>
                                    <p style={{paddingLeft: 30, paddingTop: 40, color:"white"}}>React</p>
                                    </div>
                                    </td>
                                    <td style={{paddingLeft: 15}}>
                                    <div style={{backgroundColor: "#3f617b", borderRadius: "37.5px", height: "100px", width: "100px"}}>
                                    <p style={{paddingLeft: 30, paddingTop: 40, color:"white"}}>CSS</p>
                                    </div>
                                    </td>
                                </tr> <br></br>
                                <tr style={{marginTop: 0}}>
                                <td style={{paddingLeft: 30}}>
                                    <div style={{backgroundColor: "#3f617b", borderRadius: "37.5px", height: "100px", width: "100px"}}>
                                    <p style={{paddingLeft: 30, paddingTop: 40, color:"white"}}>PHP</p>
                                    </div>
                                    </td>
                                    <td style={{paddingLeft: 15}}>
                                    <div style={{backgroundColor: "#3f617b", borderRadius: "37.5px", height: "100px", width: "100px"}}>
                                    <p style={{paddingLeft: 25, paddingTop: 40, color:"white"}}>MySQL</p>
                                    </div>
                                    </td>
                                </tr>                            
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

        </div>
    )

}

export default WorkExp;