// Import necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Render the App component to the root element in the HTML file
ReactDOM.render(<App />, document.getElementById('root'));

// Optional: register the service worker to enable offline functionality and faster load times
// Note: this is not always necessary and has some potential pitfalls
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
