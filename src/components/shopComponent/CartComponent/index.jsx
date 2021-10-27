import useRedox from "../../../hook/useRedox"
import ApplyCoupon from "./ApplyCoupon"
import CartHeader from "./CartHeader"
import CartSingleProduct from "./CartSingleProduct"
import CartTotal from "./CartTotal"

const CartComponent = () => {
    const { gstate } = useRedox()
    const cartItem = gstate?.data?.cart?.contents?.nodes ?? []
    const cartTotal = gstate?.data?.cart ?? {}
    return (
        <section className="section shopping-cart" style={{ marginTop: "12px" }}>
            <div className="container">
                <div className="section-title">
                    <h2>Cart</h2>
                    {cartItem === [] && <p>There is no product to show you.</p>}

                </div>
                <div className="cart-list-head">
                    <CartHeader />
                    {cartItem.map((product) => {
                        return (
                            <div key={product.id} >
                                <CartSingleProduct {...product} productKey={product.key} />
                            </div>

                        )
                    })}

                    <div className="row">
                        <div className="col-12">

                            <div className="total-amount">
                                <div className="row">
                                    <ApplyCoupon />
                                    <CartTotal {...cartTotal} />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartComponent
