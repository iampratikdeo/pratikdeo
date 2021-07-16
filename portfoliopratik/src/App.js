import './App.css';
import Nav from './Component/Header';
import Frontsection from './Component/Frontsection';
import About from './Component/About';

function Space(props){
  return (
    <div style={{height: 50, backgroundColor:props.bg}}></div>
  )
}

function App() {
  return (
    <div>
      <Nav />
      <Frontsection />
      <Space bg={"#e6e8e8"}/>
      <About />
    </div>
  );
}

export default App;
