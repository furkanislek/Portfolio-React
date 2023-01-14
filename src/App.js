import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import NotFound from './components/NotFound';


function App() {
 

  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/:id" component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
