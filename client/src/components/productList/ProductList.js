import React, {Component} from 'react';
import Product from '../product/Product';
import WishList from '../wishList/WishList';


import './ProductList.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     productList: []  //origin
        // }
        this.state = {products: []};
    }

    // componentDidMount() { //origin
    //     fetch('/products')
    //     .then(res => res.json())
    //     .then(productList => this.setState({productList}, () => console.log('Product fetched...', productList ))); 
    // }

    componentDidMount() {
        fetch('/products')
        .then(res => res.json())
        .then(products => this.setState({products}, () => console.log('Product fetched...', products ))); 
    }

    productList = () => {
        const list = this.state.products.map((product) => 
            <div className="col-sm-4" kej={product.id}>
                <Product title={product.name} price={product.price} imgUrl={product.imgUrl}></Product>
               
            </div>
        );
        return (list);
    }


    render() {
        // console.log(this.state) //ok

        return(
            <div className="container">     
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                    <WishList></WishList>
                    </div>
                </div>                 
                <div className="jumbotron mt-5">
                    <div className="col-sm-12 mx-auto">
                        <h1 className="text-center">Product List</h1>
                        {/* <div className="card product"> */}
                        <div className="row">
                            {this.productList()}
                        </div>  
                                 
                    </div>
                </div>                   
            </div>
        )
    }
}

export default ProductList;