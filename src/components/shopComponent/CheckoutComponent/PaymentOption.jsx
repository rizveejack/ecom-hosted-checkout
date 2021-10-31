import { CardElement } from "@stripe/react-stripe-js"

const PaymentOption = () => {
    return (

        <div className="d-block my-3">
            <CardElement />
            <button className="btn btn-primary mt-3" type="submit">Continue to checkout</button>
        </div>
    )
}

export default PaymentOption
