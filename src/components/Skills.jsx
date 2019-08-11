import React from 'react';
import CV from '../CV.pdf'


const Skills = () =>(
   
  <div className="container"> 
  <div id="Skills" className="col-md-8">
    <h1>Skills</h1>
    <p>Some of my abilities as a FrontEnd Developer... <br/> </p>
      <canvas id="myChart"></canvas>
    <br/><p>If you want to know about my other skills and services look at my LinkedIn profile or Download my CV by clicking the button</p>
    <a className="btn btn-primary btn-lg mb-3" rel="noopener noreferrer" href={CV} target="_blank">Currriculum Vitae</a>
    <hr/>
  </div>
  </div>   
    
  
    );

export default Skills;
 
