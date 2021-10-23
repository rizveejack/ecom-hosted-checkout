import React from 'react'
import SingleProduct from './SingleProduct'

const Tranding = () => {
    return (
        <section className="trending-product section" style={{ marginTop: "12px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Trending Product</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <SingleProduct />
                </div>
            </div>
        </section>
    )
}

export default Tranding
