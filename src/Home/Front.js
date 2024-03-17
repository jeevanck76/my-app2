import React from 'react';
import './basic.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import contact from './contact';
import about from './about';
import Front from './Front';

function HomePage() {
  return (
    <div className="home-page">
     
      <header className="header">
        <h1>Home</h1>
        <Router>
      <Switch>
        <Route path="/" exact component={Front} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
      </Switch>
    </Router>
      </header>
      <div class="section">
      <h1 class="text-shadow"> -- EXPLORE -- </h1>
	
    </div>
  
</div>
  );}

export default HomePage;

