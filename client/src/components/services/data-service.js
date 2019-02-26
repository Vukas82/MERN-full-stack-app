import NotificationServices, { NOTIF_WISHLIST_CHANGED } from './notification-service';

let ns = new NotificationServices();

let instance = null;
var wishList = [];

class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    itemOnWishList = item => {
        for(let i = 0; i < wishList.length; i++) {
            if (wishList[i].id === item.id) {
                return true;
            }
        }
        return false;
    }

    addWishListIyem = item => {
        wishList.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    }
    removeWishListItem = item => {
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i].id === item.id) {
                wishList.splice(i, 1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }

    }
}

export default DataService;