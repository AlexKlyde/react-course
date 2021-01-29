import React from 'react';
import { useParams } from 'react-router-dom';

const fetchUserData = userId => {
  fetch(`https://api.github.com/users/${userId}`).then(response => response.json());
};

const User = () => {
  const { productId } = useParams();
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src="https://avatars1.githubusercontent.com/u/9919?v=4"
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">Facebook</span>
        <span className="user__location">San Francisco,CA</span>
      </div>
    </div>
  );
};


export default User;
