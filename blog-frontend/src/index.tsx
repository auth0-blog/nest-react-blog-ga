import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from './contexts/auth0-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Auth0Provider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>,
	document.getElementById('root')
);