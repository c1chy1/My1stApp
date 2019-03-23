import React from 'react';
import Button from 'antd/lib/button';

export default class OrderView extends React.Component {

    render() {

  return (
            <div className="orderView row">
                <div className="col-xs-4">
                    <span>{this.props.book.name}</span>
                </div>
              <div className="col-xs-4">
                  <span>{this.props.book.price}</span>
              </div>
                <div className="col-xs-4">
                <Button className="primary" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>Remove</Button>
                </div>
            </div>
          );
    }

}