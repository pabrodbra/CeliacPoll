import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainIndex from './Main';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import Cuestionario1 from './Cuestionario1';
import Cuestionario2 from './Cuestionario2';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
		// eslint-disable-next-line
			<Route exact path="/" component={MainIndex}/>
		// eslint-disable-next-line
			<Route exact path="/contact" component={Contact}/>
		// eslint-disable-next-line
			<Route exact path="/login" component={Login}/>
		// eslint-disable-next-line
			<Route exact path="/signup" component={Signup}/>
		// eslint-disable-next-line
			<Route exact path="/cuestionario1" component={Cuestionario1}/>
		// eslint-disable-next-line
			<Route exact path="/cuestionario2" component={Cuestionario2}/>
		// eslint-disable-next-line
			<Route exact path="/admin" component={Admin}/>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();