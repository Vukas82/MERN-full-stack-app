import React, { Component } from 'react';
import './SelectedProduct.css';

class SelectedProduct extends Component {
    render() {
        return (
         <li className="list-group-item">
            <a className="aselectedItem btn btn-outline-danger "></a>
            <p className="selectedItem">  {this.props.product.name + ' '}
                 <b>$ {this.props.product.price}</b>
            </p>
         </li>
        )
    }
}
export default SelectedProduct;