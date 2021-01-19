import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

/* const getCurrentAge = date => {
  return new Date().getFullYear() - date;
}; */

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date().getFullYear() - 2004}
  />,
  rootElement
);

