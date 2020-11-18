import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Cards from "./containers/Cards";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" component={Cards} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
