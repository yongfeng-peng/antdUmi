import React from 'react';
// import G2 from '@antv/g2';
import { Chart } from '@antv/g2';

export default class SampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  // componentDidMount 是 React 组件生命周期方法之一，在组件被添加到真实文档后触发
  // ref 可以拿到当前真实的 dom 元素
  componentDidMount() {
    // G2 初始化图形代码
    this.chart = new Chart({
      // this.containerRef.current 即为引用
      container: this.containerRef.current,
      width: 450,
      height: 300
    });
    this.refreshChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.refreshChart();
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  refreshChart = () => {
    this.chart.source(this.props.data);
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  };

  render() {
    {/*
      ref新的属性 ref，通过该属性我们可以获取经过 render 后的真实节点的引用。
      如果 ref 的节点是一个 dom 元素，得到的是文档中真实的 dom 节点， 
      如果 ref 的节点是一个 component，获得将是该 component 渲染后的实例。
      而在这里，获取的是 div 的 dom。
    */}
    return (
      <div ref={ this.containerRef }></div>
    );
  }
}
