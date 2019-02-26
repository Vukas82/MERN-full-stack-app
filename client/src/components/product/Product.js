import React, { Component } from 'react';
import './Product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service'

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {onWishList: ds.itemOnWishList()};

        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({onWishList: ds.itemOnWishList(this.props.product)});
    }

    onButtonClicked = () => {
        if (this.state.onWishList) {
            ds.removeWishListItem(this.props.product)
        } else {
            ds.addWishListIyem(this.props.product)
        }
    }
    render() {
        let btnClass;

        if (this.state.onWishList) {
            btnClass = "btn btn-danger btn-block";
        } else {
            btnClass = "btn btn-dark btn-block";
        }

        return (
            <div className="card product col-sm-12">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h5 className="card-title"><b>{this.props.product.name}</b></h5>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <a className={btnClass} onClick={() => this.onButtonClicked()} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">{this.state.onWishList ? "Remove From Wish list" : "Add To Wish list"}</a>
                </div>
            </div>
        )
    }
}
export default Product;