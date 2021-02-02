import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 26,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 33,
    name: 'Greg',
  },
  {
    id: 'id-5',
    age: 46,
    name: 'Alen',
  },
  {
    id: 'id-6',
    age: 25,
    name: 'Bred',
  },
  {
    id: 'id-7',
    age: 46,
    name: 'George',
  },
  {
    id: 'id-8',
    age: 34,
    name: 'Pit',
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />,rootElement);