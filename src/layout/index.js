// import { Component } from 'react';
// import { Layout, Menu, Icon } from 'antd';
// import { Link } from 'umi';
// import { PieChartOutlined, RadarChartOutlined } from '@ant-design/icons';
// import GlobalFooter from "../components/GlobalFooter";
// import GlobalHeader from "../components/GlobalHeader";

// // Header, Footer, Sider, Content组件在Layout组件模块下
// const { Header, Footer, Sider, Content } = Layout;
// const { SubMenu } = Menu;


import { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from "../components/SiderMenu/SiderMenu";
import { getMenuData } from '../common/menu';
import logo from '../assets/logo.svg';
import GlobalHeader from "../components/GlobalHeader";

const { Content, Header } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleMenuCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { children, location } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout>
        <SiderMenu
          logo={logo}
          collapsed={collapsed}
          menuData={getMenuData()}
          location={location}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={logo}
              collapsed={collapsed}
              currentUser={{
                name: 'Serati Ma',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                userid: '00000001',
                notifyCount: 12,
              }}
              onCollapse={this.handleMenuCollapse}
            />
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            { children }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;


// export default class BasicLayout extends Component {
//   render() {
//     return (
//       <Layout>
//         <Sider width={256} style={{ minHeight: '100vh' }}>
//           <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//               <Link to="/helloworld">
//                 <span>Helloworld</span>
//               </Link>
//             </Menu.Item>
//             <SubMenu
//               key="sub1"
//               icon={<RadarChartOutlined />}
//               title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
//             >
//               <Menu.Item key="2">
//                 <Link to="/dashboard/analysis">分析页</Link>
//               </Menu.Item>
//               <Menu.Item key="3">
//                 <Link to="/dashboard/monitor">监控页</Link>
//               </Menu.Item>
//               <Menu.Item key="4">
//                 <Link to="/dashboard/workplace">工作台</Link>
//               </Menu.Item>
//             </SubMenu>
//           </Menu>
//         </Sider>
//         <Layout >
//           <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
//             <GlobalHeader
//               logo={logo}
//               collapsed={collapsed}
//               currentUser={{
//                 name: 'Serati Ma',
//                 avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
//                 userid: '00000001',
//                 notifyCount: 12,
//               }}
//               onCollapse={this.handleMenuCollapse}
//             />
//           </Header>
//           <Content style={{ margin: '24px 16px 0' }}>
//             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//               {this.props.children}
//             </div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }}>
//             <GlobalFooter
//             />
//           </Footer>
//         </Layout>
//       </Layout>
//     )
//   }
// }