import React from 'react'

const CreaditCard = () => {
    return (
        <li>
            <h6 className="title collapsed" >Payment Info</h6>
            <section className="checkout-steps-form-content" id="collapsefive">
                <div className="row">
                    <div className="col-12">
                        <div className="checkout-payment-form">
                            <div className="single-form form-default">
                                <label>Cardholder Name</label>
                                <div className="form-input form">
                                    <input type="text" placeholder="Cardholder Name" />
                                </div>
                            </div>
                            <div className="single-form form-default">
                                <label>Card Number</label>
                                <div className="form-input form">
                                    <input id="credit-input" type="text" placeholder="0000 0000 0000 0000" />
                                    <img src="/images/payment/card.png" alt="card" />
                                </div>
                            </div>
                            <div className="payment-card-info">
                                <div className="single-form form-default mm-yy">
                                    <label>Expiration</label>
                                    <div className="expiration d-flex">
                                        <div className="form-input form">
                                            <input type="text" placeholder="MM" />
                                        </div>
                                        <div className="form-input form">
                                            <input type="text" placeholder="YYYY" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-form form-default">
                                    <label>CVC/CVV <span><i className="mdi mdi-alert-circle"></i></span></label>
                                    <div className="form-input form">
                                        <input type="text" placeholder="***" />
                                    </div>
                                </div>
                            </div>
                            <div className="single-form form-default button">
                                <button className="btn">pay now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </li>
    )
}

export default CreaditCard
