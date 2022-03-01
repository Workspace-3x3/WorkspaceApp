import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './components/Hom/hom';

// import SignupOwner from '../src/components/signupOwner/signupOwner';
// import store from './app/store';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, combinReducers } from 'redux';
import counterReducer from './reducers/counter';
import allReducer from './reducers';
const store = createStore(
	allReducer,
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
