import React from 'react'

const ShipingAddress = ({ register }) => {
    return (
        <form className="needs-validation">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" />
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" />
                    <div className="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="username">Username</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" />
                    <div className="invalid-feedback">
                        Your username is required.
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" placeholder="you@example.com" />
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" />
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" />
            </div>

            <div className="row">
                <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select className="custom-select d-block w-100" >
                        <option value="">Choose...</option>
                        <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required="">
                        <option value="">Choose...</option>
                        <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" />
                    <div className="invalid-feedback">
                        Zip code required.
                    </div>
                </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
                <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" />
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                        Name on card is required
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" />
                    <div className="invalid-feedback">
                        Credit card number is required
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" />
                    <div className="invalid-feedback">
                        Expiration date required
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" />
                    <div className="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
    )
}

export default ShipingAddress
