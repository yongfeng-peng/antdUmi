import React from 'react'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: null,
      value: 1234,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;