import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from 'app/components/Nav';
import Home from 'app/components/Home';
import Buy from 'app/components/Buy';
import Contact from 'app/components/Contact';
import Login from 'app/components/Login';
import Course from 'app/components/Course';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/buy" component={Buy} />
          <Route path="/contact" component={Contact} />
          <Route path="/Login" component={Login} />
          
          <Route exact path="/course" component={Course} />
        </div>
      </Router>
    );
  }
}

export default App;
