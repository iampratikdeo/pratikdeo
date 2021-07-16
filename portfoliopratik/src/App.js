import './App.css';
import Nav from './Component/Header';
import Frontsection from './Component/Frontsection';
import About from './Component/About';
import Education from './Component/Education';

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
      <Space bg={"#e6e8e8"}/>
    </div>
  );
}

export default App;
