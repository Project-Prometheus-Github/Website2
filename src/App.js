import './styles.scss';
import ParticlesContainer from './particles.js';
import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


// figma design https://www.figma.com/file/24mDiMckplH7BUcGwQfnJW/ProjectPrometheus
// 



function App() {
  return (
    <>
      <Pages.Home />
    </>
  );
}

class Pages{
  static Home(){
    return (
      <Sections.Landing />
      
    );
  }

  // static About(){
  //   return (
  //     // how it gets rendered
  //   );
  // } 
}

class Sections {
  static Landing() {
    return (
      <section>
        <ParticlesContainer children={
          <div>
            <NavBar />
            <div className='row'>
              <Name />
              <SocialMediaIconsLanding />
            </div>
          </div>
          
        }/>
      </section>


    );
  }

  static Statistic(){
    return (
      <h1>
        <span></span>
      </h1>
    );
  }

}


function NavBar (){
  return (
    
    <div className='navbar row center f1'>
      <a class='navbar'>Home</a> 
      <a class='navbar'>About Us</a>
      <a class='navbar'>Projects</a>
      <a class='navbar'>Articles</a>
      <a class='navbar'>Editorials</a>
    </div>

    

  );
}

function Name (){
  return (
    <section className='name'>
        <div className='name row center f1'>
          <h2 className='name vertical-text'>project</h2>
          <h1 className='name'>prometheus</h1>
          
        </div>
        <h3 className = 'name f2'>Ignite the mind. Pass on the torch.</h3>
    </section>
  );
}


function SocialMediaIconsLanding(){
  // const iconStyles = {
  //   color: '#FF9400',
  //   fontSize: '500px',
  //   height: '500px',
  //   width: '500px',
  // }

  return (
    
        <div className='icon-landing column'>
          <FaInstagram className='icon'/>
          <FaTwitter className='icon'/>
          <FaGithub className='icon'/>
          <FaLinkedin className='icon'/>
        </div>
    
  );
}

// function Person({age, gender}){

//   console.log("test");

//   return (
//     <h1 className='ecolor yellow-text'>I am {age} years old {gender}.</h1>
//   );
// }


export default App;
