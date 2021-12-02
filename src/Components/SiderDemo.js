import React from 'react';
import { Layout, Menu, Breadcrumb,Row,Col,Dropdown,Avatar  } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined, 
} from '@ant-design/icons';

import { actFetchImtsRequest } from '../actions/index'
import { connect } from 'react-redux';
import routerMenu from '../routers/routerMenu'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import BreadcrumbComponents from './BreadcrumbComponents';
import { PrivateRoute } from './PrivateRoute';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount(){
    this.props.fetchAllImts();
  }
  showContentMenu = (routes) => {
    let result = null;
    result = routes.map((route,index) => {
       return (<PrivateRoute key={index} path={route.path} exact={route.exact} component= {route.main}/>)
    })
    return <Switch>{result}</Switch>;

  }

  render() {

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Thông tin tài khoản
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Đăng xuất
          </a>
        </Menu.Item>
      </Menu>
    );

    const { collapsed } = this.state;
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >
              Hyper Soft
            </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/home" >Trang chủ </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Tool Cảnh Báo">
              <Menu.Item key="3"><Link to="/home/notify" >Cài đặt cảnh báo</Link></Menu.Item>
              <Menu.Item key="4">Tool 2</Menu.Item>
              <Menu.Item key="5">Tool 3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Bot Telegram">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<DesktopOutlined />} title="Coin Tracking">
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
          <Row>
            <Col span={2} offset={22}> 
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                  <Avatar size="large" src="https://joeschmoe.io/api/v1/random" style={{marginRight:10}} />
                  Chu Pe dan
                </a> 
              </Dropdown>
          </Col>
          </Row>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <BreadcrumbComponents/>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
              {/* Bill is a cat. */}
              {/* <NotificationPage/> */}
              
                 {this.showContentMenu(routerMenu)}  
                 
             
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by HauNguyen Dev ©2021</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}
const mapStateToProps = state =>{
  return {
    imts : state.imts
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return{
    fetchAllImts : ()=>{
      dispatch(actFetchImtsRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SiderDemo);