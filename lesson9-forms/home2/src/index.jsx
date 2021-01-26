import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

const rootElement = document.querySelector('#root');


ReactDOM.render(<Game />, rootElement);

export default Game;
