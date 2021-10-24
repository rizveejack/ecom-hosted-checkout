import { useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import REMOVE_CART from "../../apollo/mutation/UPDATE_CART";
import VIEWER from "../../apollo/query/VIEWER";
import useRedox from "../../hook/useRedox";

const CartItem = () => {
    const { gstate } = useRedox()
    const products = gstate.data ? gstate?.data?.cart?.contents?.nodes : []
    const items = products ? products.length : 0
    const totalPrice = gstate.data ? gstate?.data?.cart?.total : 0

    const [removeItem, { loading, error, data }] = useMutation(REMOVE_CART, {
        refetchQueries: [VIEWER]
    })

    const removeFromCart = (key) => {
        if (!loading && !error) {
            removeItem({
                variables: {
                    key: key,
                    quantity: 0
                }
            })
        }
    }

    return (
        <div className="cart-items">
            <a href="#" className="main-btn">
                <i className="lni lni-cart"></i>
                <span className="total-items">{items}</span>
            </a>
            <div className="shopping-item">
                <div className="dropdown-cart-header">
                    <span>{items} Items</span>
                    <Link href="/cart">View Cart</Link>
                </div>
                <ul className="shopping-list">
                    {products && products.map((goods) => {
                        return (
                            <li key={goods.key}>
                                <span className="remove" title="Remove this item" onClick={() => removeFromCart(goods.key)}>
                                    <i className="lni lni-close"></i>
                                </span>
                                <div className="cart-img-head">
                                    <div className="cart-img">
                                        <Image
                                            src={goods?.product?.node?.image?.sourceUrl ?? "/images/products/product-1.jpg"}
                                            alt="#"
                                            layout="intrinsic"
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                </div>

                                <div className="content">
                                    <h4><a href="product-details.html">
                                        {goods.product.node.name}</a></h4>
                                    <p className="quantity">{goods.quantity}x - <span className="amount">{goods.total}</span></p>
                                </div>
                            </li>
                        )
                    })}

                </ul>
                <div className="bottom">
                    <div className="total">
                        <span>Total</span>
                        <span className="total-amount">{totalPrice}</span>
                    </div>
                    <div className="button">
                        <Link href="/checkout" className="btn animate">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem
