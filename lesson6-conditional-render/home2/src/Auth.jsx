import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isSpinner: false,
    }
  }

  handleLogin = () => {
    this.setState({
      isSpinner: true,
    });
    
    setTimeout(() => {
      this.setState({
        isSpinner: false,
        isLoggedIn: true,
      });
    }, 2000);
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const button = this.state.isLoggedIn
      ? <Logout onLogout={this.handleLogout} />
      : <Login onLogin={this.handleLogin} />

    return (
      <div>
        {this.state.isSpinner ? <Spinner size={50}/> : button}
      </div>
    )
  }
};

export default Auth;



