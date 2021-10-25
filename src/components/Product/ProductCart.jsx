import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";

const ProductCart = (props) => {
    const { name, price, slug, image, averageRating } = props


    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="single-product">
                <div className="product-image">
                    <Image
                        src={image?.sourceUrl ?? "/images/products/product-1.jpg"}
                        alt="#"
                        height={400}
                        width={400}
                        layout="responsive"
                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc/Op/PQAHkQL9VgAfCwAAAABJRU5ErkJggg=="
                        placeholder="blur"
                    />
                    <span className="sale-tag">-25%</span>
                    <div className="button">

                        <AddToCart {...props} />


                    </div>
                </div>
                <div className="product-info">
                    <span className="category">Laptop</span>
                    <h4 className="title">
                        <Link href={`/shop/${slug}`}>{name}</Link>
                    </h4>
                    <ul className="review">
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star"></i></li>
                        <li><i className="lni lni-star"></i></li>
                        <li><i className="lni lni-star"></i></li>
                        <li><i className="lni lni-star"></i></li>
                        <li><span>{averageRating}</span></li>
                    </ul>
                    <div className="price">
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

// ProductCart.defaultProps = {
//     title: "Apple MacBook Air",
//     image: "/images/products/product-8.jpg",
//     review: "5.0 Review(s)",
//     price: "$800.00"
// }

export default ProductCart
