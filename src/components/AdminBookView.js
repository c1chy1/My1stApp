import React from 'react';
import {connect} from 'react-redux'
import {sendBookToEditAction} from '../store/actions'
import Button from 'antd/lib/button';


export class BookView extends React.Component {

  render() {
    return (
      <div className="orderView row">
        <div className="col-xs-8">
          <span>{this.props.book.name} {this.props.book.author}</span>
        </div>
        <div className="col-xs-2">
          <Button className="ant-btn-dagger" type ="danger" onClick={ (event) => this.props.sendBookToEdit(this.props.book)}>Edit</Button>
        </div>

        <div className="col-xs-2">
          <Button className="ant-btn-dagger" type ="danger"onClick={ (event) => this.props.removeFromInventory(this.props.book.name)}>Remove</Button>
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {}

}
const mapDispatchToProps = (dispatch) => {
  return {
    sendBookToEdit: (book) => dispatch(sendBookToEditAction(book))
  }
}
const AdminBookView = connect(mapStateToProps,mapDispatchToProps)(BookView)

export default AdminBookView;

