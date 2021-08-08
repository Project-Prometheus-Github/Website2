import React, { useState } from 'react';
import './home.scss';
import PromLogo from '../../assets/logo1.png';
import PromLogo2 from '../../assets/logo3.png';


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
        
        {/* <Circles color1 ='green' size = {100} className ='circleAT' color2 = 'orange' size2 = {50} className2 = 'circleAt'/> */}
      </div>
    </section>
  )
  
}



function Initiatives(){

  const articles = {
    heading: "Articles",
    subheading: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }

  const editorials = {
    heading: "Editorials",
    subheading: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }

  return(
    <section className='initiatives row center-main'>
      <Card 
        heading={articles.heading}
        subheading={articles.subheading}
        description={articles.description}
        href='/about'
      />

      <Card 
        heading={editorials.heading}
        subheading={editorials.subheading}
        description={editorials.description}
      />

      

{/* 
      <div className='initiatives-grid'>
        <Tile title='Articles' text='bingus, arjun is a cool guy' background='#FF9400'/>
        <Tile title='Editorials' background='#000000'/>
        <Tile title='CDS Tech Club'  background='#008000'/>
        <Tile title='CCC' defaultText='test1' hoverText='please work' background='#FF0000'/>
      </div> */}


      
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
        <div className = 'row etc'>
          <h1 className='name'>pr</h1>
          <img className='name' src={PromLogo2} width={130} height={130}/>
          <h1 className = 'name2'> metheus</h1>
        </div>
          
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
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        <FaGithub className='icon'/>
        <FaLinkedin className='icon'/>
    </div>
  );
}



// function Tile({ title, defaultText, hoverText, image, onClick, background }) { // must be a part of a grid
//   const style = {
//     backgroundImage: image,
//     gridArea: title.toLowerCase().replace(/\s/g, ''), 
//     backgroundColor: background,
//   }

//   const [displayedText, setDisplayedText] = useState(defaultText); //properties that change THAT NEED TO BE RENDERED ALSO, defaultText is the initial state, useState returns a set of values, displayedText and setDisplayedText have a value of defaultText

//   const [textHoveringClass, setHoveringClass] = useState(false); //ones a setter one's a getter

//   const onMouseEnter = () => {
//     setHoveringClass('tile-text-hover');
//     setDisplayedText(hoverText);
//   }

//   const onMouseExit = () => {
//     setHoveringClass('tile-text-normal');
//     setDisplayedText(defaultText);
//   }  

  

//   return( // inline style
//     <div className='tile column' onClick={onClick} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
//       <div className='tile-content'>
//         <h1 className='f1 tile-text'>{title}</h1>
//         <Line color='white' opacity={0.5} width='40%' />
//         <p className={`f2 tile-text ${textHoveringClass}`}>{displayedText}</p>
//       </div>

//     </div>
//   );

// }

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
    <h1 className = 'yabba'>z</h1>
  </div>
  )
}


function Card({ heading, subheading, description, href='#'}){

  

  return (
    <div>
      <a className='card' href={href}>
        <h3 className='f1 card'>{heading}</h3>
        <h4 className='f2 card'>{subheading}</h4>
        <p className='f2 card'>{description}</p>
        <span class="link-text f2">
          View our {heading.toLowerCase()}
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
            </svg>
        </span>
      </a>
    </div>
  );
}

export default HomePage;