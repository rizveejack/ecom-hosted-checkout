import React from 'react';

const CartTotal = (props) => {
    console.log(props);
    const { shippingTotal, subtotal, total } = props
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="right">
                <ul>
                    <li>Cart Subtotal<span>{subtotal}</span></li>
                    <li>Shipping<span>{shippingTotal}</span></li>
                    <li>You Save<span>$29.00</span></li>
                    <li className="last">You Pay<span>{total}</span></li>
                </ul>
                <div className="button">
                    <a href="checkout.html" className="btn">Checkout</a>
                    <a href="product-grids.html" className="btn btn-alt">Continue shopping</a>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
