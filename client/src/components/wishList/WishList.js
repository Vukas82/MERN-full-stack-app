import React, { Component } from 'react';
import SelectedProduct from '../selectedProduct/SelectedProduct'
import './WishList.css';


class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {wishList: [
            {
                name: 'product 1',
                price: 347,
                id: 5
            },
            {
                name: 'product 2',
                price: 437,
                id: 6
            },
            {
                name: 'product 3',
                price: 334,
                id: 7
            },
        ]};
        this.createWishList = this.createWishList.bind(this);
    }

    
    createWishList = () => {
        const list = this.state.wishList.map((product) => 
                <SelectedProduct product={product} kej={product.id}></SelectedProduct>
        );
        return (list);
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default WishList;