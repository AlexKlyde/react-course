import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './Profile.jsx';

const rootElement = document.querySelector('#root');

/* const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};
 */
ReactDOM.render(
  <Profile
    firstName="John"
    lastName="Doe"
    birthDate={new Date('1991-01-17T11:11:11.819Z')}
    birthPlace="London"
  />,
  rootElement
);

//put your code here


//put your code here
