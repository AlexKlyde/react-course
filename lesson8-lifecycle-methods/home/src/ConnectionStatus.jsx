import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffLine);
  }

  handleOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  handleOffLine = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    const { status } = this.state;
    const className = `status ${status === 'offline' ? 'status_offline' : null}`;

    return (
      /* this.state.isOnline
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div> */

      <div className={className}>{status}</div>
    );
  }
}

export default ConnectionStatus;
