import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
  render() {
    const usersList = this.props.users;
    return (
      <div>
        <Pagination
          goPrev={} 
          goNext={}
          currentPage={}
          totalItems={}
          itemsPerPage={}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;