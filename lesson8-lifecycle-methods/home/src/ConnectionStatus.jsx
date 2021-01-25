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
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: window.navigator.onLine });
  }

  render() {
    return (
      <div
        className="status status_offline">
        {this.state.online ? 'Online' : 'Offline'}
      </div>
    );
  }
}


export default ConnectionStatus;