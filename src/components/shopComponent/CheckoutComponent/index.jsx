import { useMutation } from "@apollo/client"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import CHECKOUT from "../../../apollo/mutation/CHECKOUT"
import useRedox from '../../../hook/useRedox'
import PaymentOption from "./PaymentOption"
import ProductCart from './ProductCart'
import ShipingAddress from './ShipingAddress'


const CheckoutComponent = () => {
    const { gstate } = useRedox()
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const iscartEmpty = Boolean(gstate?.data?.cart?.contents?.nodes.length) ?? false


    const [checkout, { loading }] = useMutation(CHECKOUT)
    const stripe = useStripe()
    const elements = useElements()

    const payAction = async (data) => {
        try {
            const source = await handleStripe()
            await checkout({
                variables: {
                    "input": {
                        "clientMutationId": source.id,
                        "paymentMethod": "stripe",
                        "shippingMethod": "Flat rate",
                        "shipping": data.billing,
                        "metaData": [
                            {
                                "key": "_stripe_source_id",
                                "value": source.id
                            }
                        ]

                    }
                },
            })
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

    if (iscartEmpty === false) {
        return (
            <section className="section">
                <div className="container text-center">
                    <div className="display-4">Add Some Product To Cart</div>
                    <div className="btn text-white">
                        <Link href="/shop">Back To Shop</Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section">
            <div className="container">
                <form onSubmit={handleSubmit(payAction)}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 order-md-1 mb-4">
                            <ShipingAddress register={register} />
                        </div>
                        <div className="col-md-6 order-md-2 mb-4">
                            <ProductCart />

                            <PaymentOption />
                            <div className="text-center">
                                <button
                                    disabled={!stripe && true}
                                    className="btn btn-primary btn-block btn-lg  mt-3"
                                    type="submit">Pay Now {loading && "..."}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CheckoutComponent
