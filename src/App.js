import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/layout/Navbar";
import Home from "./componets/pages/Home";
import User from "./componets/users/User";
import Alert from "./componets/layout/Alert";
import Notfound from "./componets/pages/Notfound";
import { About } from "./componets/pages/About";
import GithubState from "./context/github/Githubstate";
import AlertState from "./context/Alert/alertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="app">
           {/* nav bar starts  */}
           <Navbar icon="fab fa-github" title="Github Finder" />
       {/* nav bar ends  */}
            
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
