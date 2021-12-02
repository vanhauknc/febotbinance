import React, { Component } from 'react';
import { Breadcrumb  } from 'antd';
import { connect } from 'react-redux';

class BreadcrumbComponents extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.breadcrumb}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        breadcrumb : state.breadcrumb
    }
}

export default connect(mapStateToProps,null)(BreadcrumbComponents);