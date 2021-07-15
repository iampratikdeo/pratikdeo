import React from "react";
import { Col } from "react-bootstrap";
import reactDom, { render } from 'react-dom';
import front from './Frontsection.module.css';

function Frontsection(){
    
    return(
            <div className={front.frontsection}>
                <div>
                    <h1 className={front.heading}>Hi, my name is Pratik Deo</h1>
                    <p style={{textAlign:"center", fontSize: 30}}>I am a software Developer</p>
                </div>
                <div>
                </div>
            </div>
    );
}


export default Frontsection;