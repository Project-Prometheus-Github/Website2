import './home.scss';
import PromLogo from '../../assets/logo1.png';


import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import NavBar from '../../global/components/navbar';

import Typing from '../../global/components/typing.js';
import Line from '../../global/components/horizontal-line.js'


function HomePage(){
  return (
    <>
      <Landing />
      <Statistic />
      <OurMission />
      <Initiatives />
      <TestingThing />
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

  var x = 4

  return (
    <section className='statistic row center-main'>
      
      <Typing className='f2' words={[`${x} unique page views.`]}/>
    </section>
    
  );
}


function OurMission(){
  
  return(
    <section className='mission row center-main' >
      <div className = 'column'>
        <Line color='#FF9400' height={10} width={300} className='testing'/>
        <h1 className='f1' style={{color: "orange"}}>Our Mission</h1>
        <h2 className='f2'  style={{color: "grey"}}> To spread the mesmerising apects of computer science and engineering to the world. </h2>
        <h3 className='f2' style={{color: "black"}} >View our initiatives below.</h3>
      </div>
      <img className='' src={PromLogo} width={60} height={60}/>
    </section>
  )
  
}



function Initiatives(){
  return(
    <section className='initiatives'>


      <div className='initiatives-grid'>
        <Tile title='Articles' text = 'bingus, arjun is a cool guy' onClick={() => {console.log("articles");}} background='#FF9400'/>
        <Tile title='Editorials' onClick={() => {console.log("editorials");}} background='#000000'/>
        <Tile title='CDSTechClub' onClick={() => {console.log("hello arjun");}} background='#008000'/>
        <Tile title='CCC' onClick={() => {console.log("adam hello");}} background='#FF0000'/>
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
          <Typing className='f2' words={['Ignite the mind. Pass on the torch.']}/>
        </div>
      </div>
    </section>
  );
}

function SocialMediaIconsLanding(){
  return (
    <div className='center-main icon-landing row moving2'>
      <div  style={{backgroundColor: "white", justifyContent: 'center'}}>
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        <FaGithub className='icon'/>
        <FaLinkedin className='icon'/>
      </div>
    </div>
  );
}



function Tile({ title, text, image, onClick, background }) { // must be a part of a grid
  const style = {
    backgroundImage: image,
    gridArea: title.toLowerCase(), 
    backgroundColor: background
  }

  return( // inline style
    <div className='tile row center-main center-cross' onClick={onClick} style={style}>
      <h1 className='f1 tile-text'>{title}</h1>
      <p className='f2 tile-text'>{text}</p>
    </div>
  );
}

function TestingThing(){
  const style = {
    width: '100px',
    height: '100px',
    background: 'red',
    position: 'relative',
  }

  return(
    <div className ='moving' style={style}> </div> 
  )
}


export default HomePage;