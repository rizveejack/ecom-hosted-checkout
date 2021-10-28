import React from 'react'
import CreaditCard from './CreaditCard'
import ShipingAddress from './ShipingAddress'
const CheckoutComponent = () => {
    return (
        <section className="checkout-wrapper section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="checkout-steps-form-style-1">
                            <ul id="accordionExample">
                                <ShipingAddress />
                                <CreaditCard />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutComponent
