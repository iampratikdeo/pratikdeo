import './App.css';
import Nav from './Component/Header';
import Frontsection from './Component/Frontsection';
import About from './Component/About';
import Education from './Component/Education';
import Certifications from './Component/Certifications';
import WorkExp from './Component/WorkExp';
import ProjectDiv from './Component/ProjectDiv';

function Space(props){
  return (
    <div style={{height: 50, backgroundColor:props.bg}}></div>
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
      <Space bg={"#e6e8e8"}/> 
      <About />
      <Education school1 = {pillai} school2 = {stevens}/>
      <Space bg={"#455561"}/>
      <Certifications />
      <Space bg={"#e6e8e8"}/>
      <WorkExp />
      <ProjectDiv />
    </div>
  );
}

export default App;
