import React from 'react'

const CartItem = () => {
    return (
        <div className="shopping-item">
            <div className="dropdown-cart-header">
                <span>2 Items</span>
                <a href="cart.html">View Cart</a>
            </div>
            <ul className="shopping-list">
                <li>
                    <a href="#" className="remove" title="Remove this item"><i className="lni lni-close"></i></a>
                    <div className="cart-img-head">
                        <a className="cart-img" href="product-details.html"><img src="images/header/cart-items/item1.jpg" alt="#" /></a>
                    </div>

                    <div className="content">
                        <h4><a href="product-details.html">
                            Apple Watch Series 6</a></h4>
                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                    </div>
                </li>
                <li>
                    <a href="#" className="remove" title="Remove this item"><i className="lni lni-close"></i></a>
                    <div className="cart-img-head">
                        <a className="cart-img" href="product-details.html"><img src="images/header/cart-items/item2.jpg" alt="#" /></a>
                    </div>
                    <div className="content">
                        <h4><a href="product-details.html">Wi-Fi Smart Camera</a></h4>
                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                    </div>
                </li>
            </ul>
            <div className="bottom">
                <div className="total">
                    <span>Total</span>
                    <span className="total-amount">$134.00</span>
                </div>
                <div className="button">
                    <a href="checkout.html" className="btn animate">Checkout</a>
                </div>
            </div>
        </div>

    )
}

export default CartItem
