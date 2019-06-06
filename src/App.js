import React, {Fragment} from 'react'; 
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch';
import {Navbar, Container} from 'semantic-ui-react'
import Navbar from './components/Navbar';

// will act as a routing station to other components instead of acting as the main page. 
const App = () => (
  <Fragment>
    <Navbar/>
    <Container>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route component={NoMatch}/>
    </Switch>
    </Container>
  </Fragment>
); 

export default App

// rce - class component with export at the bottom 
// rafce - arrow function for functional component