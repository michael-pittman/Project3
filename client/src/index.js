import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LeftSideBar from './LeftSideBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<LeftSideBar />, document.getElementById('root'));
registerServiceWorker();
