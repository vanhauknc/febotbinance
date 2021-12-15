import React, { Component } from 'react';
import { Table,Button,Switch,Popconfirm,Tag } from 'antd';
import ModalNotiPage from './ModalNotiPage';
import { actFetchOrdersRequest } from '../../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import { actDeleteOrderRequest,actUpdateOrderRequest } from '../../actions';
import {AddBreadCrum} from '../../actions/breadcrum'
class NotificationPage extends Component {


    onChangeStatus = (id,status) =>{
      let Tstatus = null;
      status === 'A' ? Tstatus = 'D' : Tstatus ='A'
        let data = {
          id:id,
          status : Tstatus
        }
        this.props.updateOrder(data)
    }
    onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    }
    componentDidMount(){
      this.props.addBread('Cài đặt cảnh báo')
      this.props.fetchAllOrder();
    }
    
    confirm = (id)=>{
      this.props.deleteOrder({id})
    }
   
    render() {
        const columns = [
            {
              title: 'Mã Cặp',
              dataIndex: 'imtcode',
              width: '20%',
              sorter: (a, b) => a.imtcode.localeCompare(b.imtcode),
            },
            {
              title: 'Giá đánh dấu',
              dataIndex: 'priceflag',
              width: '20%',
              sorter: (a, b) => a.priceflag - b.priceflag,
            },
            // {
            //   title: 'Lặp',
            //   dataIndex: 'p_status',
            //   width: '10%',
            //   sorter: (a, b) => a.p_status.localeCompare(b.p_status),
            //   render : text => (<div>{text == '1' ? "Một lần" : "Nhiều lần"}</div>)
            // },
            {
              title: 'Điều kiện',
              dataIndex: 'type',
              width: '10%',
              sorter: (a, b) => a.type.localeCompare(b.type),
              render : text => (<div>{text == 'less' ? "Nhỏ hơn" : "Lớn hơn"}</div>)
            },
            {
                title: 'Trạng thái',
                dataIndex: 'status',
                width: '10%',
                sorter: (a, b) => a.status.localeCompare(b.status),
                render : text => <Tag color={text === 'A' ? 'green' : 'volcano'} key={text}>{text === 'A' ? 'HOẠT ĐỘNG' : "KHÔNG HOẠT ĐỘNG"}</Tag>
            },
            {
              title: 'Thời gian',
              dataIndex: 'createdAt',
              width: '10%',
              sorter: (a, b) => a.status.localeCompare(b.status),
              render : text => (<div>{ moment.utc(text).local().format('YYYY-MM-DD HH:mm:ss')}</div>)
          },
            {
                title: 'Hành động',
                dataIndex: '_id',
                width: '10%',
                render : (id,row) => (<div> <Switch checked={row.status === 'A' ? true : false} onChange={()=>this.onChangeStatus(id,row.status)}  />

            <Popconfirm
                placement="top"
                title="Bạn có chắn chắn muốn xóa ?"
                onConfirm={()=>this.confirm(id)}
                okText="Yes"
                cancelText="No"
              >
                <Button style={{marginLeft:5}} type="danger" > Xóa</Button> 
              </Popconfirm>
                
              </div>  )
              },
          ];
        
        return (
            <div>
                <ModalNotiPage/>
                <Table columns={columns} dataSource={this.props.orders} onChange={this.onChange} pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}} />
                
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
  return {
    orders : state.orders
  }
}

const mapDispatchToProps= (dispatch,props)=>{
  return {
    fetchAllOrder : ()=>{
      dispatch(actFetchOrdersRequest());
    },
    deleteOrder : (order)=>{
      dispatch(actDeleteOrderRequest(order));
    },
    updateOrder : (order)=>{
      dispatch(actUpdateOrderRequest(order))
    },
    addBread : (data)=>{
      dispatch(AddBreadCrum(data))
  }
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NotificationPage)


