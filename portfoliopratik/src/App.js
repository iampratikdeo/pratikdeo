import './App.css';
import Nav from './Component/Header';
import Frontsection from './Component/Frontsection';
import About from './Component/About';
import Education from './Component/Education';
import Certifications from './Component/Certifications';
import WorkExp from './Component/WorkExp';
import { Col, Row } from 'react-bootstrap';

function Space(props){
  return (
    <div style={{height: 50, backgroundColor:props.bg}}></div>
  )
}
function SpaceIcon(props){
  return (
    <div style={{height: 50, backgroundColor:props.bg}}>
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
  )
}

const stevens = {
  "schoolName": "Stevens Institute of Technology",
  "degree": "Master of Science",
  "major": "Computer Science",
  "year": "2021",
  "address": "Hoboken, New Jersey, USA"
}
const pillai = {
  "schoolName": "University of Mumbai",
  "degree": "Bachelor of Engineering",
  "major": "Computer Engineering",
  "year": "2019",
  "address": "Mumbai, Maharashtra, India"
}

function App() {
  return (
    <div>
      <Nav />
      <Frontsection />
      <SpaceIcon bg={"#e6e8e8"}/>
      <About />
      <Education school1 = {pillai} school2 = {stevens}/>
      <Space bg={"#e6e8e8"}/>
      <Certifications />
      <Space bg={"#455561"}/>
      <WorkExp />
    </div>
  );
}

export default App;
