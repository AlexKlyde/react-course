import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    }
  }

  colorTitle(color) {
    this.setState({
      colorName: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.colorName}
        </div>
        <button
          className="picker__button picker__button_coral"
          onMouseOver={() => this.colorTitle(CORAL)}
          onMouseOut={() => this.colorTitle()}
        >
        </button>
        <button
          className="picker__button picker__button_aqua"
          onMouseOver={() => this.colorTitle(AQUA)}
          onMouseOut={() => this.colorTitle()}
        >
        </button>
        <button
          className="picker__button picker__button_bisque"
          onMouseOver={() => this.colorTitle(BISQUE)}
          onMouseOut={() => this.colorTitle()}
        >
        </button>
      </div>
    )
  }
};

export default ColorPicker;

