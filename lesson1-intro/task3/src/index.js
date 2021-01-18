//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

/* const element = React.createElement(
  'div',
  { className: 'greeting' },

  React.createElement(
    'h1',
    { className: 'greeting__title' },
    'Hello, world!'
  ),

  React.createElement(
    'p',
    { className: 'greeting__text' },
    "I'm learning React"
  ),
); */

ReactDOM.render(element, rootElement);
