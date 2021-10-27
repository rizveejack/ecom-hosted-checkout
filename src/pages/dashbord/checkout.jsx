import Subscribe from "../../components/Auth/Subscribe"
import FrontEnd from "../../layout/FrontEnd"

const Checkout = () => {
    return (
        <Subscribe>
            <FrontEnd>
                <section className="checkout-wrapper section" style={{ marginTop: "12px" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2>Checkout</h2>
                            <p>There is no product to show you.</p>
                        </div>

                        <div className="checkout-steps-form-content collapse show">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>User Name</label>
                                        <div className="row">
                                            <div className="col-md-6 form-input form">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6 form-input form">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Email Address</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Phone Number</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>Mailing Address</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Mailing Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>City</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="City" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Post Code</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Post Code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Country</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Country" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Region/State</label>
                                        <div className="select-items">
                                            <select className="form-control">
                                                <option value="0">select</option>
                                                <option value="1">select option 01</option>
                                                <option value="2">select option 02</option>
                                                <option value="3">select option 03</option>
                                                <option value="4">select option 04</option>
                                                <option value="5">select option 05</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-payment-option">
                                        <h6 className="heading-6 font-weight-400 payment-title">Select Delivery
                                            Option</h6>
                                        <div className="payment-option-wrapper">
                                            <div className="single-payment-option">
                                                <input type="radio" name="shipping" checked="" id="shipping-1" />
                                                <label htmlFor="shipping-1">
                                                    <img src="/images/placeholder.png" alt="Sipping" />
                                                    <p>Standerd Shipping</p>
                                                    <span className="price">$10.50</span>
                                                </label>
                                            </div>
                                            <div className="single-payment-option">
                                                <input type="radio" name="shipping" id="shipping-2" />
                                                <label htmlFor="shipping-2">
                                                    <img src="/images/placeholder.png" alt="Sipping" />
                                                    <p>Standerd Shipping</p>
                                                    <span className="price">$10.50</span>
                                                </label>
                                            </div>
                                            <div className="single-payment-option">
                                                <input type="radio" name="shipping" id="shipping-3" />
                                                <label htmlFor="shipping-3">
                                                    <img src="/images/placeholder.png" alt="Sipping" />
                                                    <p>Standerd Shipping</p>
                                                    <span className="price">$10.50</span>
                                                </label>
                                            </div>
                                            <div className="single-payment-option">
                                                <input type="radio" name="shipping" id="shipping-4" />
                                                <label htmlFor="shipping-4">
                                                    <img src="/images/placeholder.png" alt="Sipping" />
                                                    <p>Standerd Shipping</p>
                                                    <span className="price">$10.50</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="steps-form-btn button">
                                        <button className="btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">previous</button>
                                        <a href="" className="btn btn-alt">Save &amp; Continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FrontEnd>
        </Subscribe>

    )
}

export default Checkout
