import React, { Component } from 'react';

class EvenNumber extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0;
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

export default EvenNumber;
