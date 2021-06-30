import '../../global/global.scss';
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
          
        }/>
    );
}

function Statistic(){
    return (
      <section className='statistic row center'>
        <h1 className='statistic'>diawdjiaw</h1>
      </section>
      
    );
}

// components
function Name(){
  return (
    <section className='name'>
      <div className='row center f1'>
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

export default HomePage;