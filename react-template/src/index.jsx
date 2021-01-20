import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './App.js';

const rootElement = document.querySelector('#root');

const element = <Profile
  userData={{
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
  }}
/>

ReactDOM.render(
  element,
  rootElement
);

//put your code here


//put your code here