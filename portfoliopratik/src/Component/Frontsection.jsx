import React from "react";
import { Col } from "react-bootstrap";
import reactDom, { render } from 'react-dom';
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
                </div>
            </div>
    );
}


export default Frontsection;