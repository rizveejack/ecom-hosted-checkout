import Link from "next/link";

const CartTotal = (props) => {

    const { shippingTotal, subtotal, total } = props
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="right">
                <ul>
                    <li>Cart Subtotal<span>{subtotal}</span></li>
                    <li>Shipping<span>{shippingTotal}</span></li>
                    <li>You Save<span>$29.00</span></li>
                    <li className="last">You Pay<span>{total}</span></li>
                </ul>
                <div className="button">
                    <Link href="/dashbord/checkout" passHref>
                        <button className="btn">
                            Checkout
                        </button>

                    </Link>
                    <Link href="/shop" passHref>
                        <button className="btn btn-alt">
                            Continue shopping
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
