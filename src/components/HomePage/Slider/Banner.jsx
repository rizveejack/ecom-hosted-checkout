import React from 'react'

const Banner = () => {
    return (
        <div className="hero-small-banner style2" style={{ backgroundImage: "url('images/hero/slider-bnr.jpg')" }}>
            <div className="content">
                <h2>Weekly Sale!</h2>
                <p>Saving up to 50% off all online store items this week.</p>
                <div className="button">
                    <a className="btn" href="product-grids.html">Shop Now</a>
                </div>
            </div>
        </div>
    )
}

export default Banner
