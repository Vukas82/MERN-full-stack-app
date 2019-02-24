import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div className="card product col-sm-12">
                <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a className="btn btn-block btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add to Wishlist</a>
                </div>
            </div>
        )
    }
}
export default Product;