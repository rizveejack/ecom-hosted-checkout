import Subscribe from "../../components/Auth/Subscribe"
import CheckoutComponent from "../../components/shopComponent/CheckoutComponent"
import FrontEnd from "../../layout/FrontEnd"

const Checkout = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <CheckoutComponent />
            </Subscribe>
        </FrontEnd>

    )
}

export default Checkout
