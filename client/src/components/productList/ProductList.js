import React, {Component} from 'react';
import './ProductList.css';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            productList: [
            ]
        }
    }

    // componentDidMount() {
    //     fetch('/api/productList')
    //     .then(res => res.json())
    //     .then(productList => this.setState({productList}, () => console.log('Product fetched...', productList )));
    // }

    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Product List</h1>
                        <h1 className="text-center">Product List</h1>

                        <ul className="ulProductList">
                            {this.state.productList.map(productList => 
                                <li className="liProductList" key={ productList.id }>{ productList.name }   { `: $  `+ productList.price }</li>    
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;