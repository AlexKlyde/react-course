import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      showSpinner: false,
    }
  }

  handleLogin = () => {
    this.setState({
      showSpinner: true,
    });
    
    setTimeout(() => {
      this.setState({isLoggedIn: true, showSpinner: false});
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
      <>
        {this.state.showSpinner ? <Spinner size={50}/> : button}
      </>
    )
  }
};

export default Auth;



