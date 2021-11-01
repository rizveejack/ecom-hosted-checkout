import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const stripePromise = loadStripe("pk_test_51DicdRHgNP4jLX4FOSbrs1bcOqiPRlnhXwdzKblsNVjYMRvynTbRnq0rLkur0vByxwOiHR7FKWTGOh0htIF7yBws009MURZU5C")

const CheckoutDemo = () => {



    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

export default CheckoutDemo
