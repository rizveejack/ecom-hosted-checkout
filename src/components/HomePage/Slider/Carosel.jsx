import React from 'react'

const Carosel = () => {
    return (
        <div className="single-slider tns-item tns-slide-cloned" style={{ backgroundImage: "url(images/hero/slider-bg1.jpg)" }}>
            <div className="content">
                <h2><span>No restocking fee ($35 savings)</span>
                    M75 Sport Watch
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
                <h3><span>Now Only</span> $320.99</h3>
                <div className="button">
                    <a href="product-grids.html" className="btn">Shop Now</a>
                </div>
            </div>
        </div>


    )
}

export default Carosel
