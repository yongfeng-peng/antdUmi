import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    // 组件挂载后自动调用，
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    // 在组件卸载前自动调用
    console.log('componentWillUnmount');
  }

  componentDidUpdate() {
    // 会在 UI 每次更新后调用（即组件挂载成功以后，每次调用 render 方法，都会触发这个方法）
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
