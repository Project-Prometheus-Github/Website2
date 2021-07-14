import "./global/global.scss";

import ParticlesContainer from './particles.js';
import HomePage from "./pages/home/home.js"

// figma design https://www.figma.com/file/24mDiMckplH7BUcGwQfnJW/ProjectPrometheus
// 


console.log("hello world");

function App() {
  return ( 
    <ParticlesContainer>
      <HomePage />
    </ParticlesContainer>
   
  );
}




export default App;
