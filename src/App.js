

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./global/global.scss";
import HomePage from "./pages/home/home.js"
import AboutPage from "./pages/about/about.js"
import ProjectsPage from "./pages/projects/projects.js"

// figma design https://www.figma.com/file/24mDiMckplH7BUcGwQfnJW/ProjectPrometheus
// 

console.log("hello world");

function App() {
  return ( 
    <Router>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/about'>
          <AboutPage />
        </Route>

        <Route path='/projects'>
          <ProjectsPage />
        </Route>

      </Switch>
    </Router>

   
  );
}




export default App;
