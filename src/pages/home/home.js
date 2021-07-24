
import './home.scss';


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
    </>
  );
}

// sections of the home page
function Landing() {
    return (
        <>
          <NavBar />       
          <Name />
          <SocialMediaIconsLanding />
        </>
        
    );
}

function Statistic(){

  var x = 4
  var y = 8

  return (
    <section className='statistic row center-main'>
      <h1 className='statistic f2'>{x} Articles shared. {y} Editorials written.</h1>
    </section>
    
  );
}


function OurMission(){
  
  return(
    <section className='mission column' >
      <Line color='#FF9400' height={10} width={300} className='testing'/>
      <h1 className ='f1 ' style={{color: "orange"}}>Our Mission</h1>
      <h2 className = 'f2'  style={{color: "grey"}}> To spread the mesmerising apects of computer science and engineering to the world. </h2>
      <h3 className = 'f2' style={{color: "black"}} >View our initiatives below.</h3>
    </section>
  )
  
}



function Initiatives(){
  return(
    <section className='initiatives'>


      <div className='initiatives-grid'>
        <Tile title='Articles'  onClick={() => {console.log("articles");}} background='#FF9400'/>
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
    <section className='name column center-cross'>
      <div className='column'>
          <div className='row center-main f1'>
            <h2 className='name vertical-text fire'>project</h2>
            <h1 className='name'>prometheus</h1>
            
          </div>
          <Typing className='name f2' words={['abcdef', 'abcg']}/>
        </div>
    </section>
  );
}

function SocialMediaIconsLanding(){
  return (
    <div className='icon-landing column'>
      <FaInstagram className='icon'/>
      <FaTwitter className='icon'/>
      <FaGithub className='icon'/>
      <FaLinkedin className='icon'/>
    </div>
  );
}



function Tile({ title, text, image, onClick, background }) { // must be a part of a grid
  var style = {
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





export default HomePage;


