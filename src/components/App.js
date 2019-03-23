import React from 'react';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';
import Footer from './Footer';
import 'antd/dist/antd.css';

import '../index.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            order : [],
        }
    }

    addToOrder = (book) => {
        this.setState({
            order : [...this.state.order, book]
        })
    }

    removeFromOrder = () =>{

        this.setState({
            order : this.state.order.splice(1)
    })
    }

    render() {
        return (
            <div className="app container">
                <Header />
                <div className="row middle">
                    <Order
                      order={this.state.order}
                      removeFromOrder={this.removeFromOrder}
                    />
                    <Inventory
                      books={this.state.books}
                      addToOrder={this.addToOrder}/>
                </div>
                    <Footer/>
                    </div>

        )

    }

}


export default App;