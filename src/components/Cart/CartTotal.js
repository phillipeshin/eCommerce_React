import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal({value})  {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
        <div className="container"></div>
        <div className="row">
            <div className="col-10 mt-3 pr-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>Clear Cart</button>
            </Link>
            <h5>
                <span className="text-title">
                 Subtotal:</span>
                $ {cartSubTotal}
            </h5>
            <h5>
                <span className="text-title">
                 Tax:</span>
                $ {cartTax}
            </h5>
            <h5>
                <span className="text-title">
                 Total:</span>
                $ {cartTotal}
            </h5>
            </div>
        </div>
    </React.Fragment>
    );
}
