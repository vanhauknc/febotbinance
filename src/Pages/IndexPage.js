import { Col, Row } from 'antd';
import React, { Component } from 'react';
import io from 'socket.io-client';
import PriceCardComponent from '../Components/PriceCardComponent';
import {SOCKET_PORT} from '../constants/Config'
import {AddBreadCrum} from '../actions/breadcrum'
import { connect } from 'react-redux';

class IndexPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            listData : []
        }
    }

    componentWillMount() {
        this.props.addBread('Thị trường')
       const socket = io(SOCKET_PORT, { transports: ['websocket'] });
        socket.on('get-data', (data) => {
            this.setState({
                listData : data
            })

        })
    }

    render() {
        let {listData} = this.state;
        return (
            <Row>
                {listData.map((data,index)=>{
                    return (<PriceCardComponent key={index} title={data.symbol} price={data.close} percent={data.percentage} />)
                })}
      
                
            </Row>
            
        );
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        addBread : (data)=>{
            dispatch(AddBreadCrum(data))
        }
    }
}

export default connect(null,mapDispatchToProps)(IndexPage);