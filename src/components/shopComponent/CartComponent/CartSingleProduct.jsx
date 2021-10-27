import { useMutation } from "@apollo/client"
import Image from "next/image"
import { useState } from "react"
import UPDATE_CART from "../../../apollo/mutation/UPDATE_CART"
import VIEWER from "../../../apollo/query/VIEWER"

const CartSingleProduct = (props) => {
    const { product, quantity, subtotal, total, productKey } = props
    const [Quantity, setQuantity] = useState(quantity)
    const [updateQuantity, { loading, error, data }] = useMutation(UPDATE_CART, {
        refetchQueries: [VIEWER]
    })

    const changeQuantity = (event) => {
        const pQuantity = event.target.value
        if (!loading && pQuantity > 0) {
            setQuantity(pQuantity)
            updateQuantity({
                variables: {
                    key: productKey,
                    quantity: parseInt(pQuantity)
                }
            })
        }

    }

    const reMoveFromCart = (productKey) => {
        if (!loading) {
            updateQuantity({
                variables: {
                    key: productKey,
                    quantity: 0
                }
            })
        }

    }

    return (
        <div className="cart-single-list">
            <div className="row align-items-center">
                <div className="col-lg-1 col-md-1 col-12">
                    <a href="product-details.html">
                        <Image
                            width={60}
                            height={60}
                            layout="fixed"
                            src="/images/placeholder.png"
                            alt="#" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                    <h5 className="product-name">
                        <a href="product-details.html">
                            {product?.node?.name}
                        </a>
                    </h5>
                    <p className="product-des">
                        <span><em>Type:</em> Mirrorless</span>
                        <span><em>Color:</em> Black</span>
                    </p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                    <div className="count-input">
                        <input
                            type="number"
                            value={Quantity}
                            onChange={(e) => changeQuantity(e)}
                        />
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                    <p>{subtotal}</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                    <p>{total}</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                    <div
                        onClick={() => reMoveFromCart(productKey)}
                        className="remove-item" href="">
                        <i className="lni lni-close"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSingleProduct
