import React from 'react';
import Button from 'antd/lib/button';

export default class BookView extends React.Component {

    render() {

        return (
            <div className="bookView row">
                <div className="col-xs-4">
                    <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/>
                  <center><b>{this.props.book.genre}<br/></b></center>
                    </div>

                <div className="col-xs-4">
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                  <i>{this.props.book.price}</i><br/>
                    </div>
              <div className="col-xs-4"><p>{this.props.book.description}</p></div>
                <div className="col-xs-4">
                    <Button className="ant-btn-dagger" type ="danger" onClick={(event) => this.props.addToOrder(this.props.book)}>Add to Order</Button>
                </div>
            </div>
        );
    }
}