import React, { useState } from 'react';
import './home.scss';
import PromLogo from '../../assets/logo1.png';


import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import NavBar from '../../global/components/navbar';

import Typing from '../../global/components/typing.js';
import Line from '../../global/components/horizontal-line.js';
import Circles from '../../global/components/overlapping.js';
import Oval from '../../global/components/ovals.js';


function HomePage(){
  return (
    <>
      <Landing />
      <Statistic />
      <OurMission />
      <Initiatives />
      {/* <TestingThing /> */}
    </>
  );
}

// sections of the home page
function Landing() {
    return (
      <div className='column landing'>
        <NavBar />       
        <Name />
        <SocialMediaIconsLanding />
      </div>
    );
}

function Statistic(){

  var x = 4;
  var y = 8;

  return (
    <section className='statistic row center-main'>
      
      <Typing loop={true} className='f2' words={[`${x} unique page views.`, `${y} articles written.`]}/>

    

    </section>
    
  );
}


function OurMission(){
  
  return(
    <section className='mission row' >
      <div className = 'mission column'>
        <Line color='#808080' height={7} width={150} opacity={0.33} className=''/>
        <h1 className='f1 mission'>Our Mission</h1>
        <h2 className='f2 mission'style={{ whiteSpace: "pre" }}> {`To spread the mesmerising apects of \n computer science and engineering to the world.`} </h2>
        <h3 className='f2 mission'>View our initiatives below.</h3>
      </div>
      <div classname = 'missionex'>
        <img className='mission' src={PromLogo} width={650} height={650}/>
        <Oval color = 'green' size ={100} className = 'circleAT'/>
        <Oval color = 'orange' size ={50} className = 'circleAT' style ={{position:"relative", left: 3000}}/>
        {/* <Circles color1 ='green' size = {100} className ='circleAT' color2 = 'orange' size2 = {50} className2 = 'circleAt'/> */}
      </div>
    </section>
  )
  
}



function Initiatives(){
  return(
    <section className='initiatives'>


      <div className='initiatives-grid'>
        <Tile title='Articles' text='bingus, arjun is a cool guy' background='#FF9400'/>
        <Tile title='Editorials' background='#000000'/>
        <Tile title='CDS Tech Club'  background='#008000'/>
        <Tile title='CCC' defaultText='test1' hoverText='please work' background='#FF0000'/>
      </div>
    </section>
  )
}


// COMPONENTS
function Name(){
  return (
    <section className='name row center-main'>
      <div className='column'>
        <div className='row center-main f1'>
          <h2 className='name vertical-text fire'>project</h2>
          <h1 className='name'>prometheus</h1>
          
        </div>
        <div className='typing-anim'>
          <Typing loop={false} className='f2' words={['Ignite the mind. Pass on the torch.']}/>
        </div>
      </div>
    </section>
  );
}

function SocialMediaIconsLanding(){
  return (
    <div className='center-main icon-landing row moving2'>
      <div  style={{justifyContent: 'center'}}>
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        <FaGithub className='icon'/>
        <FaLinkedin className='icon'/>
      </div>
    </div>
  );
}



function Tile({ title, defaultText, hoverText, image, onClick, background }) { // must be a part of a grid
  const style = {
    backgroundImage: image,
    gridArea: title.toLowerCase().replace(/\s/g, ''), 
    backgroundColor: background,
  }

  const [displayedText, setDisplayedText] = useState(defaultText); //properties that change THAT NEED TO BE RENDERED ALSO, defaultText is the initial state, useState returns a set of values, displayedText and setDisplayedText have a value of defaultText

  const [textHoveringClass, setHoveringClass] = useState(false); //ones a setter one's a getter

  const onMouseEnter = () => {
    setHoveringClass('tile-text-hover');
    setDisplayedText(hoverText);
  }

  const onMouseExit = () => {
    setHoveringClass('tile-text-normal');
    setDisplayedText(defaultText);
  }  

  

  return( // inline style
    <div className='tile column' onClick={onClick} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <div className='tile-content'>
        <h1 className='f1 tile-text'>{title}</h1>
        <Line color='white' opacity={0.5} width='40%' />
        <p className={`f2 tile-text ${textHoveringClass}`}>{displayedText}</p>
      </div>

    </div>
  );

}

function TestingThing(){
  const style = {
    width: '100px',
    height: '100px',
    background: 'red',
    position: 'relative'
  }

  return(
  <div>
    <div className ='circle' ></div> 
    <h1 className = 'yabba'> my namea jeff</h1>
  </div>
  )
}


export default HomePage;