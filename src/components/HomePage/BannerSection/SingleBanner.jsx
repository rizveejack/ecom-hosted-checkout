import React from 'react'

const SingleBanner = () => {
    return (
        <div className="col-lg-6 col-md-6 col-12">
            <div className="single-banner" style={{ backgroundImage: "url('images/banner/banner-1-bg.jpg')" }}>
                <div className="content">
                    <h2>Smart Watch 2.0</h2>
                    <p>Space Gray Aluminum Case with <br />Black/Volt Real Sport Band </p>
                    <div className="button">
                        <a href="product-grids.html" className="btn">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBanner
