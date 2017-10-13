import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LeftSideBar from './LeftSideBar';
import Tile from './Tile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LeftSideBar />, document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(<Tile />, document.getElementById('root'));
// registerServiceWorker();
