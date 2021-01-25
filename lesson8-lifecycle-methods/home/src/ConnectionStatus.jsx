import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: true,
  }

   componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: window.navigator.onLine });
  }

  render() {
    return (
        this.state.online
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>
    );
  };
}


export default ConnectionStatus;