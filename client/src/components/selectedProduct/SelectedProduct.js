import React, { Component } from 'react';
import './SelectedProduct.css';
import DataService from '../services/data-service';

let ds = new DataService();
class SelectedProduct extends Component {

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }

    render() {
        return (
         <li className="list-group-item">
            <button className="aselectedItem btn btn-danger " onClick={() => this.removeProduct()}><i className="dell fas fa-window-close"></i></button>
            <p className="selectedItem">  {this.props.product.name + ' '}
                 <b>$ {this.props.product.price}</b>
            </p>
         </li>
        )
    }
}
export default SelectedProduct;