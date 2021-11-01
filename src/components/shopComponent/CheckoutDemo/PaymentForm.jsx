import { useMutation } from '@apollo/client';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CHECKOUT from "../../../apollo/mutation/CHECKOUT";


const PaymentForm = () => {
    const [checkout] = useMutation(CHECKOUT)
    const stripe = useStripe()
    const elements = useElements()

    const payAction = async (e) => {
        e.preventDefault()
        try {
            const source = await handleStripe()
            if (source) {
                await checkout({
                    variables: {
                        input: {
                            clientMutationId: '12345',
                            paymentMethod: 'stripe', // <-- Hey WooCommerce, we'll be using Stripe
                            shippingMethod: 'Flat rate',
                            billing: { // <-- Hard-coding this for simplicity
                                firstName: 'George',
                                lastName: 'Costanza',
                                address1: `129 West 81st Street, Apartment 5A`,
                                city: `New York`,
                                state: `NY`,
                                postcode: `12345`,
                                email: `george@vandelayindustries.com`,
                            },
                            metaData: [
                                {
                                    key: `_stripe_source_id`,
                                    value: source.id,
                                },
                            ],
                        },
                    },
                })
            }
        } catch (error) {
            console.error(error)
        }
    }


    const handleStripe = async () => {

        if (!stripe && !elements) {

            throw Error(`stripe or elements undefined`)
        }


        // Extract the payment data from our <CardElement/> component
        const cardElements = elements.getElement(CardElement)

        if (!cardElements) {
            throw Error(`cardElements not found`)
        }

        // Create the Source object
        const { source, error: sourceError } = await stripe.createSource(
            cardElements
        )

        // Guard against and error or undefined source
        if (sourceError || !source) {
            throw Error(sourceError?.message || `Unknown error generating source`)
        }

        return source
    }


    return (
        <form onSubmit={payAction}>
            <CardElement
                options={{
                    hidePostalCode: true, // We'll be sending up the postal ourselves
                }}
            />

            <button
                className="btn btn-primary"
                disabled={!stripe} type="submit">Pay</button>
        </form>
    )
}

export default PaymentForm
