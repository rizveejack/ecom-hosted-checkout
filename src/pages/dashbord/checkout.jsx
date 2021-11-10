import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Subscribe from "../../components/Auth/Subscribe"
import CheckoutComponent from "../../components/shopComponent/CheckoutComponent"
import FrontEnd from "../../layout/FrontEnd"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)

const Checkout = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <Elements stripe={stripePromise}>
                    <CheckoutComponent />
                </Elements>
            </Subscribe>
        </FrontEnd>

    )
}

export default Checkout
