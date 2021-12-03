import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Avatar, Modal, Button, Input,Form } from 'antd';
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
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from "react-router-dom";
import BreadcrumbComponents from './BreadcrumbComponents';
import { PrivateRoute } from './PrivateRoute';
import NotificationComponent from './NotificationComponent';
import callApi from '../utils/apiCaller';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogout: false,
      isModalVisible : false,
      user: {},
      dataForm:{
        password:'',
        newpassword:'',
        repassword:''
      }
    }
  }
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    this.props.fetchAllImts();
  }
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('hyperUser'));
    this.setState({
      user
    })
  }
  showContentMenu = (routes) => {
    let result = null;
    result = routes.map((route, index) => {
      return (<PrivateRoute key={index} path={route.path} exact={route.exact} component={route.main} />)
    })
    return <Switch>{result}</Switch>;

  }
  onLogout = () => {
    localStorage.removeItem('hyperUser');
    this.setState({
      isLogout: true
    })

  }
  onFinish = (values) => {
    let {password,newpassword,repassword} = values;
    if(newpassword != repassword)
    {
      NotificationComponent.openNotificationWithIcon('error',"Thông báo","Mật khẩu xác thực không chính xác")
      return;
    }else{
      callApi('changepass','POST',values).then(res=>{
        if(res.data.status)
        {
          NotificationComponent.openNotificationWithIcon('success',"Thông báo",res.data.message)
        }else{
          NotificationComponent.openNotificationWithIcon('error',"Thông báo",res.data.message)
        }
      })
    }
 };

  onFinishFailed = (errorInfo) => {
   console.log('Failed:', errorInfo);
 };
 handleCancel = () => {
  this.setState({
      isModalVisible: false
  })
};
handleOk = () => {
  this.setState({
      isModalVisible: false
  })
};

handleCancel = () => {
  this.setState({
      isModalVisible: false
  })
};

  render() {
    if (this.state.isLogout) {
      return <Redirect to='/login' />
    }
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={()=>this.setState({isModalVisible:true})} >
            Đổi mật khẩu
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" onClick={this.onLogout} >
            Đăng xuất
          </a>
        </Menu.Item>
      </Menu>
    );

    const { collapsed, user,isModalVisible } = this.state;
    let {password,newpassword,repassword} = this.state.dataForm;
    return (
      <Router>

        <Modal title="Đổi mật khẩu" footer={null}  visible={isModalVisible} destroyOnClose={true} onOk={this.handleOk} onCancel={this.handleCancel}  >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            //   initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
            style={{ paddingRight: 20 }}
          >




            <Form.Item
              label="Mật khẩu cũ"
              name="password"
              rules={[{ required: true, message: 'Vui lòng không bỏ trống !' }]}
            >
              <Input.Password style={{ width: "100%" }} min={0} maxLength={100} />
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              name="newpassword"
             
              rules={[{ required: true, message: 'Vui lòng không bỏ trống !' }]}
            >
              <Input.Password style={{ width: "100%" }} min={0} maxLength={100} />
            </Form.Item>

            <Form.Item
              label="Nhập lại "
              name="repassword"
             
              
              rules={[{ required: true, message: 'Vui lòng không bỏ trống !' }]}
            >
              <Input.Password style={{ width: "100%" }} min={0} maxLength={100} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>


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
                <Col span={3} offset={21}>
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                      <Avatar size="large" src="https://joeschmoe.io/api/v1/random" style={{ marginRight: 10 }} />
                      {user?.name}
                    </a>
                  </Dropdown>
                </Col>
              </Row>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <BreadcrumbComponents />
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
const mapStateToProps = state => {
  return {
    imts: state.imts
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllImts: () => {
      dispatch(actFetchImtsRequest());
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SiderDemo));