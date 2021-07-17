import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                price: 9999,
                title: 'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                id: 1
            }, {
                price: 5999,
                title: 'Watch',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
                id: 2
            }, {
                price: 70999,
                title: 'Laptop',
                qty: 6,
                img: 'https://images.unsplash.com/photo-1545313917-21ce155ad283?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                id: 3
            }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products: products
        })

    }
    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 1) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })

    }

    handleDelete = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
    }

    getCartCount = () => {
        const {products} = this.state;
        let count = 0;
        products.forEach((product) => {
            count += product.qty;
        })
        return count;
    }
    getCartTotal = () => {
        const {products} = this.state;
        let cartTotal = 0;
        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price ;
        })
        return cartTotal;
    }

    render() {
        const {products} = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()}/>
                <Cart products={products} onIncreaseQuantity={this.handleIncreaseQuantity}
                      onDecreaseQuantity={this.handleDecreaseQuantity} onDelete={this.handleDelete}/>
                <div style = {{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
            </div>
        );
    }
}

export default App;
