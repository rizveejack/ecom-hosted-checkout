import className from "classname"
import React from 'react'

const Banner = (props) => {
    return (
        <div className={className("hero-small-banner", props.bclass)} style={{ backgroundImage: "url('images/hero/slider-bnr.jpg')" }}>
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

Banner.defaultProps = {
    bclass: "style1"
}


export default Banner
