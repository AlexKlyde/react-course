import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  search = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`)
  }

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          className="search__input"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="search__button" type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
