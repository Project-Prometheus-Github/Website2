

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./global/global.scss";
import ParticlesContainer from './particles.js';
import HomePage from "./pages/home/home.js"
import AboutPage from "./pages/about/about.js"

// figma design https://www.figma.com/file/24mDiMckplH7BUcGwQfnJW/ProjectPrometheus
// 

console.log("hello world");

function App() {
  return ( 
    <Router>
      <Switch>
        <Route path='/'>
          <ParticlesContainer>
            <HomePage />
          </ParticlesContainer>
        </Route>

        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </Router>

   
  );
}




export default App;
