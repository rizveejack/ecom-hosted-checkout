import React from 'react'
import SingleBanner from './SingleBanner'

const BannerSection = () => {
    return (
        <section className="banner section">
            <div className="container">
                <div className="row">
                    <SingleBanner />
                    <SingleBanner />
                </div>
            </div>
        </section>
    )
}

export default BannerSection
