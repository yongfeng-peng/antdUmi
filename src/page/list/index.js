import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import SampleChart from '../../components/SampleChart'

const FormItem = Form.Item;

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 21,
  },
};

class List extends React.Component {
  formRef = React.createRef(); // React 提供的一个创建引用的便捷方法
  state = {
    visible: false, // 对话框是否显示
    statisticVisible: false,
    id: null,
  };
  columns = [
    {
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '描述',
      dataIndex: 'desc'
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>
    },
    {
      title: '',
      dataIndex: 'statistic',
      render: (_, { id }) => {
        return (
          <Button onClick={() => {this.showStatistic(id)}}>图表</Button>
        )
      }
    }
  ];

  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList'
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  showStatistic = (id) => {
    this.props.dispatch({
      type: 'cards/getStatistic',
      payload: id
    });
    this.setState({
      id,
      statisticVisible: true
    })
  }

  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  handleOk = () => {
    const { dispatch } = this.props;
    this.formRef.current.validateFields()
    .then( values => {
      console.log('添加的数据', values);
      dispatch({
        type: 'cards/addOne',
        payload: values,
      });
      // 重置visible 属性为 false
      this.setState({
        visible: false
      })
    })
    // this.form.validateFields((err, values) => {
    //   if(!err) {
    //     dispatch({
    //       type: 'cards/addOne',
    //       payload: values,
    //     });
    //     // 重置visible 属性为 false
    //     this.setState({
    //       visible: false
    //     })
    //   }
    // })
  }

  render() {
    const { visible, statisticVisible, id  } = this.state;
    const { cardsList, cardsLoading, statistic } = this.props;
    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
        <Button onClick={this.showModal}>新建</Button>
        <Modal
          title="新建记录"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form ref={this.formRef}  {...layout}>
           {/* getFieldDecorator 是用于将包裹的组件与表单进行双向绑定使用 ant3 */}
           {/* <FormItem label="名称">
              {getFieldDecorator('name', {
                rules: [{ required: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator('desc')(
                <Input />
              )}
            </FormItem>
            <FormItem label="链接">
              {getFieldDecorator('url', {
                rules: [{ type: 'url' }],
              })(
                <Input />
              )}
              </FormItem> */}
            <FormItem
              name="name"
              label="名称"
              rules= {[
                { required: true, message: '请填写名称' }
              ]}
            >
              <Input />
            </FormItem>
            <FormItem
              name="desc"
              label="描述"
            >
              <Input />
            </FormItem>
            <FormItem
              name="url"
              label="链接"
              rules= {[
                { type: 'url' }
              ]}
            >
              <Input />
            </FormItem>
          </Form>
        </Modal>

        <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
          <SampleChart data={statistic[id] ? statistic[id] : []} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('cardsList');
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
    statistic: state.cards.statistic,
  };
}
// Form.create()(List)创建一个高阶组件，为页面组件 List 提供表单所需要的内容(this.props.form) ant3
// export default connect(mapStateToProps)(Form.create()(List));
export default connect(mapStateToProps)(List);
