import React, { Component } from 'react';
import { Table,Tag } from 'antd';
import moment from 'moment';
import callApi from '../../utils/apiCaller';
class HistoryNoti extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataSource : []
        }
    }

    componentDidMount(){
        callApi('orderhistory','GET',null).then(res=>{
            console.log(res);
            this.setState({
                dataSource:res.data.data
            })
        })
    }
    render() {
        const columns = [
            {
              title: 'Nội dung',
              dataIndex: 'log',
              width: '50%',
             
            //  sorter: (a, b) => a.imtcode.localeCompare(b.imtcode),
            },
            {
              title: 'Thời gian',
              dataIndex: 'createdAt',
              width: '30%',
              align : 'center',
              sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
              render : text => (<div>{ moment.utc(text).local().format('YYYY-MM-DD HH:mm:ss')}</div>)
          },
           
          ];
        
        return (
            <div>
                
                <Table columns={columns} dataSource={this.state.dataSource} pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}} />
                
            </div>
        );
    }
}

export default HistoryNoti;