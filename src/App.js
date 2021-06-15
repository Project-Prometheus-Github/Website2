import './styles.scss';

function App() {
  return (
    <>
      <center><h1 className='centered'>Prometheus.</h1></center>

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
      <MenuBar />
    );
  }
}

function MenuBar (){
  return (
    <div className='nav-bar centered row'>
      <a className='nav'>Home</a> 
      <a className='nav'>About Us</a>
      <a className='nav'>Projects</a>
      <a className='nav'>Articles</a>
      <a className='nav'>Editorials</a>
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
