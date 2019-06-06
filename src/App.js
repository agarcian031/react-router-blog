import React from 'react'; 
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'

import React from 'react'

// will act as a routing station to other components instead of acting as the main page. 
const App = () => (
  <Route exact path="/" component={Home}/>
); 

export default App

// rce 
// rafc