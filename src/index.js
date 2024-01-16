import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { store } from './store'
import { AppContainer } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContainer />
		</Provider >
	</React.StrictMode>,
);
