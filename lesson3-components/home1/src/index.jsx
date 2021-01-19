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
    birthDate={new Date(2019, 11, 1)}
  />,
  rootElement
);

