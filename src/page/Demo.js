import React from 'react';
import { Tabs, Tree } from 'antd';

const { TabPane } = Tabs;
const { TreeNode } = Tree;

class Demo extends React.Component {
  state = {
    text: '',
    activeKey: 1,
    expandedKeys: [],
  };
  // 受控组件与非受控组件
  onTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
    console.log(event.target.value);
  }

  onTextReset = () => {
    // 重置
    this.setState({
      text: ''
    })
  }

  onTabChange = (activeKey) => {
    this.setState({ activeKey });
  }

  // 接收原本的展开事件，在 state 中记录 expandedKeys
  onExpand = (expandedKeys) => {
    this.setState({ expandedKeys });
  }

  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];

    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }

  render() {
    const MyInput = ({  value = '', onChange }) => (
      <input value={value} onChange={onChange} />
    );
    return (
      <div>
        <MyInput value={this.state.text} onChange={this.onTextChange} />
        {/* <input onChange={this.onTextChange} /> */}
        <button onClick={this.onTextReset}>Reset</button>
        <div>
          <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </div>
        <div>
          <Tree
            expandedKeys={this.state.expandedKeys}
            selectedKeys={[]}
            onExpand={this.onExpand}
            onSelect={this.onSelect}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="leaf" key="0-0-0" />
              <TreeNode title="leaf" key="0-0-1" />
            </TreeNode>
          </Tree>
        </div>
      </div>
    );
  }
}

export default Demo;
