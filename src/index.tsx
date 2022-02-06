import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './components/App';
import './style.css';

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);
