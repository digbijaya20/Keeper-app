import React from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateKeep from "./components/createKeep";
import EditKeep from "./components/editKeep";
import KeepList from "./components/keepList";


function App() {
  return (
    <Router>
    <div className="container">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Keeper App</Link>
      <div className="collpase nav-collpase">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Keep</Link>
          </li>

        </ul>
      </div>
    </nav>
    <Route path="/" exact component={KeepList}/>
    <Route path="/edit/:id" exact component={EditKeep}/>
    <Route path="/create" exact component={CreateKeep}/>
  </div>
  </Router>
  );
}

export default App;
