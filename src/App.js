import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import resumeData from './data/data';
import JavaScript from './components/Skills-Components/JavaScript';
import Css from "./components/Skills-Components/Css";
import Cypress from "./components/Skills-Components/Cypress";
import ReactJs from "./components/Skills-Components/ReactJs";
import Redux from "./components/Skills-Components/Redux";
import Bootstrap from "./components/Skills-Components/Bootstrap";


function App() {
  const resume = resumeData["tr"];
  console.log(resume);
 

  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} ></Route>

        <Route exact path="/JavaScript" component={JavaScript}></Route>
        <Route exact path="/ReactJs" component={ReactJs}></Route>
        <Route exact path="/Redux" component={Redux}></Route>
        <Route exact path="/Bootstrap" component={Bootstrap}></Route>
        <Route exact path="/Cypress" component={Cypress}></Route>
        <Route exact path="/Css" component={Css}></Route>
    
      </Switch>
    </>
  );
}

export default App;
