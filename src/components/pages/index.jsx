// pages/index.js
 
import React from 'react';
import banner from "../../images/DebExo24.gif"; 
import debel from "../../images/Logo2.png";
import drdo from "../../images/drdo.png";
import imgsec2 from "../../images/picture7.png";
import imgsec3 from "../../images/querrying.png";
import imgsec4 from "../../images/masked.jpg";
import muskoback from " ../../images/masked.jpg";
// import muskoback from allImages;

import "./index.css";
import "./honeycomb.css";

const Home = () => {
  

    return (
    <div>
        <div className="background-container" >
            <img className="img-title-comb" src={banner}></img>
        </div>
       <section className='sec-01' style={{paddingTop:100}}>
        <div className="content2">
      
          <div className ="left-img"  >
       
            <img src={debel} alt=''/>
            </div>

        <div className="text-box2" >
        <p id = "unq">
          Come, be a part of this unique Event</p>
        <p id="p13" > For the first time in India
        ▪ In the spirit of intellectual curiosity and innovative zeal in the development of human-centric exoskeleton technologies ...
        ▪ Gathering of Researchers, Industrialists, Professionals, Policymakers, Users.
        ▪ Transformative discussions and visionary insights towards the shared pursuit of excellence on promising technologies required to build various forms of exoskeleton for different kinds of applications.
        ▪ Bengaluru, the city that embodies the spirit of progress and promises an enriching experience at every corner awaits shaping the next epoch of technologies.
        </p>
        </div>
        <div className ="right-img"  >
          <img src={drdo}/>
        </div>
        </div>
        </section>
        <section class="sec-02">
      <div class="content2"  >
        <div class="text-box2">
            
          <p id="unq">Join us in our quest for excellence …</p>
          <p id="p13">
              Brainstorming and innovations for a comprehensive roadmap on ...
              ▪ Hypotheses
              ▪ Designs
              ▪ Developments
              ▪ Evaluation Strategies
              ▪ Regulatory Standards  
              for rehabilitative, industrial, and defence applications.
            </p>
        </div>
        <div class="image2" >
          <img id = "pic1" src={imgsec2} alt=""></img>
        </div>
      </div>
    </section>
    <section class="sec-03" >
      <div class="content2" >
        <div class="image2">
          <img src={imgsec3} alt=""></img>
          </div>
          <div class="text-box2">
            <p id = "unq">Deliberate with us as we discuss and brainstorming on…</p>  
            <p id="p13">
                ▪ Global Status, Requirements, and Challenges for Exoskeleton,
                ▪ Dissemination of research undertaken to establish an ecosystem among   
              ▪ Academia  ▪ Industries  ▪ Customers 
              For potential collaboration opportunities
              </p> 
          </div>
        </div>
      </section>

      <section class="sec-04" >
          <div class="content2"  >
            <div class="text-box2">
              <p id = "unq" >The first of its kind opportunity and platform…</p>    
              <p id="p13" >
                  ▪ To hypothesize, ideate, seed, design, showcase and capacity building.
                  ▪ Renowned Speakers across the globe sharing rich experiences and road ahead.
                  ▪ Interactive lectures by Researchers, Customers, Industries, Policymakers.  
                  ▪ Interspersed with an exhibition and live demonstrations of technologies.
                </p>
            </div>
            <div class="image2">
              <img src={imgsec4} alt=""></img>
            </div>
          </div>
        </section>
        
    <section class="sec-05" >  
    <ul id="hexGrid">
      <li class="hex">
        <a class="hexIn" href="#">
          <img id="hexpic1" src={muskoback} alt="" />
          <h1>Musculoskeletal Modelling & Simulation</h1>
          <p>
            ▪ Musculoskeletal Modelling & Simulation
            ▪ Predictive Dynamics 
            ▪ Digital Twin Exoskeleton  Simulation Platform
            ▪ Dynamic Co-simulation
          </p>
         
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#">
          <img id="hexpic2" src="./images/wapexo-grey.png" alt="" />
          <h1>Soft Sensing, Biomechanisms, Structure</h1>
          <p >
            ▪ Unique biomechanics, dynamics for rehabilitation and augmentation
            ▪ Hypothesis of biomechanism realisation
            ▪ Myo-Neural Sensing & Interface
            ▪ Bio-mimetic materials and soft actuators
          </p>
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#">
          <img id="hexpic3" src="./images/7.jpg" alt="" />
          <h1>Human Machine Interface (HMI) & Regulatory Standards</h1>
          <p>
            ▪ Human Machine Interface 
            ▪ Regulatory Standards
          </p>
        </a>
      </li>
    
      <li class="hex" >
        <a class="hexIn" href="#" >
           <img id="hexpic4" src="images/delib.jpg" alt="" />

        </a>
      </li>


      <li class="hex">
        <a class="hexIn" href="#">
          <img id="hexpic5" src="./images/Picture2.jpg" alt="" />
          <h1>Advancement in Exoskeleton - Global Status</h1>
          <p> ▪ Plenary talks and deliberation</p>
        </a>
      </li>

      <li class="hex">
        <a class="hexIn" href="#">
          <img id="hexpic6" src="./images/session5.jpg" alt="" />
          <h1>Control Strategies</h1>
          <p>
            ▪ Bio-mimetic & Bio inspired Actuators
            ▪ Human in Loop Control Strategies
            ▪ Neuro-Muscular Control Strategies
          </p>
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#">
          <img id="hexpic7" src="./images/application.jpg" alt=""  />
          <h1>Exoskeleton Applications</h1>
          <p>
            ▪ Plenary talks and deliberation 
            ▪ Rehabilitation
            ▪ Augmentation
            </p>
          </a>
          </li>
        </ul>
        </section>

      </div>
    );
};
 
export default Home;