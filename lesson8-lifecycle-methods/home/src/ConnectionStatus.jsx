import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: window.navigator.onLine,
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
    const online = this.state.online;
    return (
      <div
        className={online ? "status" : "status status_offline"}>
        {online ? 'Online' : 'Offline'}
      </div>
    );
  }
}


export default ConnectionStatus;