import React from 'react';
import {connect} from 'react-redux'
import {updateBookAction} from '../store/actions'
import Back from './Back'
import { Checkbox } from 'antd';



class AddBook extends React.Component {

  addNewBook = (event) => {

    event.preventDefault();

    if (!this.props.editMode) {

      const newBook = { ...this.props.book };

      this.props.addNewBook(newBook);
      // this.props.addBook(newBook);
      this.props.updateBook({

          name:'',
          author: '',
          description: '',
          onStock: true,
          image: '',
          genre: '',
          price: ''
      })

    } else {

      const newBook = { ...this.props.book };
      this.props.editBook(this.props.titleOfBookForRemoval, newBook);
      this.setState({
        book: {
            name:'',
            author: '',
            description: '',
            onStock: true,
            image: '',
            genre: '',
            price: Number
        }
      })
    }
event.target.reset();

  }

  handleChange = (event) => {

    let newBook;

    if (event.target.name === "onStock") {
      newBook = {
        ...this.props.book,
        [event.target.name]: event.target.checked,
      };
    } else {
      newBook = {
        ...this.props.book,
        [event.target.name]: event.target.value
      };
    }
   this.props.updateBook(newBook)

  }

  render () {

    const label = this.props.editMode?"Edit":"Add";


    return (
      <div className="adminPanel col-xs-4">
        <form onSubmit={this.addNewBook}>
          <div className="form-group">
            <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                   onChange={this.handleChange} value={this.props.book.name}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book author" id="author" name="author"
                   className="form-control"
                   onChange={this.handleChange} value={this.props.book.author}/>
          </div>
          <div className="form-group">
                            <textarea placeholder="Book description" id="description" name="description"
                                      className="form-control"
                                      onChange={this.handleChange} value={this.props.book.description}/>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Book price" id="price" name="price"
                   className="form-control"
                   onChange={this.handleChange} value={this.props.book.price}/>
          </div>
          <select id="genre" className="select" name="genre" onChange={this.handleChange} value={this.props.book.genre}>
            <option value="Drama">Drama</option>
            <option  value="Comedy">Comedy</option>
            <option  value="Thriller">Thriller</option>
            <option value="Romantic">Romantic</option>
            <option value="Horror">Horror</option>
          </select>
          <div className="form-group">
            <Checkbox type="checkbox" id="onStock"  name="onStock"
                   onChange={this.handleChange} value={this.props.book.onStock}/>
            <label htmlFor="onStock" className="form-check-label">On stock</label>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                   onChange={this.handleChange} value={this.props.book.image}/>
          </div>
          <button type="submit" className="btn btn-primary">{label}</button>
          <Back/>

        </form>
          </div>

    )
  }
}

const mapDispatchToProps = dispatch => {

            return {
              updateBook : book => dispatch(updateBookAction(book))
            }

}


const mapStateToProps = state => {

            return {
              book: state.book,
              editMode: state.editMode,
              titleOfBookForRemoval: state.titleOfBookForRemoval
            }
}

const AddBookPanel = connect(mapStateToProps,mapDispatchToProps)(AddBook)

export default AddBookPanel;