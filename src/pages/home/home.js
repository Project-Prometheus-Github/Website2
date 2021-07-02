
import './home.scss';

import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ParticlesContainer from './particles.js';
import NavBar from '../../global/components/navbar';


function HomePage(){
  return (
    <>
      <Landing />
      <Statistic />
      <Initiatives />
    </>
  );
}

// sections of the home page
function Landing() {
    return (
        <ParticlesContainer children={
          <div>
            <NavBar />
            <div className='row'>
              <Name />
              <SocialMediaIconsLanding />
            </div>
          </div>
          }
          />
    );
}

function Statistic(){
  return (
    <section className='statistic row center-main'>
      <h1 className='statistic'>diawdjiaw</h1>
    </section>
    
  );
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
    <section className='name'>
      <div className='row center-main f1'>
        <h2 className='name vertical-text'>project</h2>
        <h1>prometheus</h1>
        
      </div>
      <h3 className='f2'>Ignite the mind. Pass on the torch.</h3>
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


function Tile({ title, text, image, onClick, background}) { // must be a part of a grid
  var style = {
    backgroundImage: image,
    gridArea: title.toLowerCase(), 
    backgroundColor: background
  }

   console.log("asf");
  console.log(background);

  return( // inline style
    <div className='tile row center-main center-cross' onClick={onClick} style={style}>
      <h1 className='f1 tile-text'>{title}</h1>
      <p className='f2 tile-text'>{text}</p>
    </div>
  );
}


export default HomePage;