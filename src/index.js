import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import getStore from './store';
import App from './components/App/App';

export const store = getStore();

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById(`root`)
);
