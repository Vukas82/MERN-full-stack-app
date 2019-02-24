import React, {Component} from 'react';

class Landing extends Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome to online shop</h1>
                    </div>
                </div>
                <div className="jumbotron">
                    <div className="col-sm-4 mx-auto">
                    <h1 className="text-center"><i class="fas fa-angle-double-right" style={{fontSize: 48}}></i><a href="/products"><i className="fas fa-cart-plus" style={{fontSize: 48}}></i></a><i class="fas fa-angle-double-left" style={{fontSize: 48}}></i></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;