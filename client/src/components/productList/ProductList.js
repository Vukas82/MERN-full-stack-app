import React, { Component } from 'react';
import Product from '../product/Product';
import WishList from '../wishList/WishList';


import './ProductList.css';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = { products: [] };
	}


	componentDidMount() {
		fetch('/products')
			.then(res => res.json())
			.then(products => this.setState({ products }, () => console.log('Product fetched...', products)));
	}


    productList = () => {
    	const { products } = this.state;
    	const list = products.map(product =>
    		(
	<div className="col-sm-4" kej={product.id}>
    				<Product product={product} />
    			</div>
    		)
    	);
    	return (list);
    }


    render() {

    	return (
    		<div className="container">
    			<WishList />
    			<div className="jumbotron mt-5">
    				<div className="col-sm-12 mx-auto">
    					<h1 className="text-center">Product list</h1>
    					<div className="row">
	{this.productList()}
    					</div>
    				</div>
    			</div>
    		</div>
    	);
    }
}

export default ProductList;
