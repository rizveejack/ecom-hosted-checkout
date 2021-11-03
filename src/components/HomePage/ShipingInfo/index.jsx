import React from 'react'
import SingleIcon from './SingleIcon'

const Shipinginfo = () => {
    return (
        <section className="shipping-info">
            <div className="container">
                <ul>
                    <SingleIcon {...{ icon: "lni lni-delivery", title: "Free Shipping", message: "On order over $99" }} />
                    <SingleIcon {...{ icon: "lni lni-support", title: "24/7 Support.", message: "Live Chat Or Call." }} />
                    <SingleIcon {...{ icon: "lni lni-credit-cards", title: "Online Payment.", message: "Secure Payment Services." }} />
                    <SingleIcon {...{ icon: "lni-reload", title: "Easy Return.", message: "Hassle Free Shopping." }} />
                </ul>
            </div>
        </section>
    )
}

export default Shipinginfo
