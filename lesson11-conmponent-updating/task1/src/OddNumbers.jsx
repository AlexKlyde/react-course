import React, { Component } from 'react';

class OddNumber extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 1;
  }

  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

export default OddNumber;
