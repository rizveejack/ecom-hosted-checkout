import React from 'react'

const MobileApp = () => {
    return (
        <div className="single-footer our-app">
            <h3>Our Mobile App</h3>
            <ul className="app-btn">
                <li>
                    <a href="#">
                        <i className="lni lni-apple"></i>
                        <span className="small-title">Download on the</span>
                        <span className="big-title">App Store</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="lni lni-play-store"></i>
                        <span className="small-title">Download on the</span>
                        <span className="big-title">Google Play</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MobileApp
