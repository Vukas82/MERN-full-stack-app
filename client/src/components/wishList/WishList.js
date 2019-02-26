import React, { Component } from 'react';
import SelectedProduct from '../selectedProduct/SelectedProduct';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service'
import './WishList.css';

let ns = new NotificationService();

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {wishList: []};
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }
    
    onWishListChanged(newWishList) {
        this.setState({wishList: newWishList});
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) => 
                <SelectedProduct product={product} kej={product.id}></SelectedProduct>
        );
        return (list);
    }

    render() {
        let titleClass;

        if (this.state.wishList.length > 0 ) {
            titleClass = "card-title";
        } else {
            titleClass = "card-title-none";
        }
        return (
            <div>
                <div className="card-block">
                    <h4 className={titleClass}>Wish list<span>&nbsp;&nbsp;&nbsp;</span><i class="fas fa-cart-arrow-down"></i></h4>
                    <ul className="list-group" >
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default WishList;
