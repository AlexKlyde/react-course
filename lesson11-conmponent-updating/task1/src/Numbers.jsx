import React, { PureComponent } from 'react';

class Numbers extends PureComponent {

  /* shouldComponentUpdate(nextProps) {
    const { title, number } = this.props;
    if (nextProps.title === title && nextProps.number === number) {
      return false;
    }
    return true;
  } */

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

export default Numbers;
