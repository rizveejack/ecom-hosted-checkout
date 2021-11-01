import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"


const PaymentOption = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const source = await handleStype()
        console.log(source);
    }

    const handleStype = async () => {
        if (!stripe && !elements) {

            throw Error("strype not ready")
        }

        const cardElement = elements.getElement(CardElement)

        if (!cardElement) {
            throw Error("Card element not found")
        }

        const { source } = await stripe.createSource(cardElement, {
            type: "card"
        })

        return source


    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="d-block my-3">
                <h4 className="mb-3">Creaditcard details</h4>
                <div className="card">
                    <div className="card-body">
                        <CardElement />
                    </div>
                </div>
                <button className="btn btn-primary mt-3" type="submit">Continue to checkout</button>
            </div>
        </form>
    )
}

export default PaymentOption
