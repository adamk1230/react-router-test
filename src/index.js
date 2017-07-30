import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/views/home';
import Contact from './components/views/contact';
import Login from './components/views/login';
import Signup from './components/views/signup';




ReactDOM.render(
	<BrowserRouter>
  		<div>
    	<Route path='/home' component={Home} />
    	<Route path='/contact' component={Contact} />
    	<Route path='/login' component={Login} />
    	<Route path='/signup' component={Signup} />
  		</div>
	</BrowserRouter>, 
	document.getElementById("root"));