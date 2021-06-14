import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home';
import Fav from './Components/Fav';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/recipe' component={App} />
      <Route path='/favorite' component={Fav} /> 
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
