import React, {Component} from 'react';

class Landing extends Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome to online shop <a href="/products"><i className="fas fa-cart-plus"></i></a></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;