import React from 'react'

const SingleProduct = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
                <div className="product-image">
                    <img src={props.image} alt="#" />
                    <span className="sale-tag">-25%</span>
                    <div className="button">
                        <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                    </div>
                </div>
                <div className="product-info">
                    <span className="category">Laptop</span>
                    <h4 className="title">
                        <a href="product-grids.html">{props.title}</a>
                    </h4>
                    <ul className="review">
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><span>{props.review}</span></li>
                    </ul>
                    <div className="price">
                        <span>{props.price}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

SingleProduct.defaultProps = {
    title: "Apple MacBook Air",
    image: "/images/products/product-8.jpg",
    review: "5.0 Review(s)",
    price: "$800.00"
}

export default SingleProduct
