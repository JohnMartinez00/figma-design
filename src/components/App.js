import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Gallery from "./Gallery";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/Gallery">
              <Gallery></Gallery>
            </Route>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
