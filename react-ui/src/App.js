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
import Welcome from 'app/components/Welcome';
import Admin from 'app/components/Admin';

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
          <Route path="/course" component={Course} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
