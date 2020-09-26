import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './Components/Page/Home';
import Services from './Components/Page/Services';
import Products from './Components/Page/Products';
import SignUp from './Components/Page/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
      <Route path="/" exact  component={Home}/>
      <Route path="/services" exact  component={Services}/>
      <Route path="/products" exact  component={Products}/>
      <Route path="/sign-up" exact  component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
