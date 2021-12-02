import React, { Component } from 'react';
import { Card } from 'antd';
class PriceCardComponent extends Component {
    render() {
        return (
            <Card style={{ width: 200,backgroundColor:this.props.percent < 0 ? '#ED7171' : '#7EC17E' ,color:"#FFF",textAlign: "center" }}>
                <p className="price-title">{this.props.title}</p>
                <p className="price-close">${this.props.price}</p>
                <p className="price-percent">{this.props.percent }%</p>

            </Card>
        );
    }
}

export default PriceCardComponent;