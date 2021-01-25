import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    const filteredList = this.props.users.filter(user => {
      return user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={filteredList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {filteredList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
