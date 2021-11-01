import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Subscribe from "../../components/Auth/Subscribe"
import CheckoutComponent from "../../components/shopComponent/CheckoutComponent"
import FrontEnd from "../../layout/FrontEnd"


const stripePromise = loadStripe("pk_test_51DicdRHgNP4jLX4FOSbrs1bcOqiPRlnhXwdzKblsNVjYMRvynTbRnq0rLkur0vByxwOiHR7FKWTGOh0htIF7yBws009MURZU5C")

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
