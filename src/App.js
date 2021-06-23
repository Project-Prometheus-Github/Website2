import './styles.scss';
import ParticlesContainer from './particles.js';

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
      <ParticlesContainer children={
        <div className='f1'>
          <NavBar />
          <Name />
        </div>
      }/>
      
    );
  }
}

function NavBar (){
  return (
    
    <div className='navbar row center'>
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
    <div className='center'>
      <div className='name row center'>
        <h2 className='name vertical-text'>project</h2>
        <h1 className='name'>prometheus</h1>
      </div>

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
