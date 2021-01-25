import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const usersList = this.props.users;
    const updatedList = usersList.some(
      element => element.name.toLowerCase() === this.state.value.toLowerCase(),
    )
      ? usersList.filter(
          user => user.name.toLowerCase() === this.state.value.toLowerCase(),
        )
      : usersList;

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={updatedList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {updatedList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
