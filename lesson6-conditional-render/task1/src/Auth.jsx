import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: false,
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    // example 2
     const button = this.state.isLoggedIn
          ? <Logout onClick={this.handleLogout} />
          : <Login onClick={this.handleLogin} />

    // example 1
    /* let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={this.handleLogout}>Logout</button>
    } else {
      button = <button onClick={this.handleLogin}>Login</button>
    } */

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    )
  }
};

export default Auth;



