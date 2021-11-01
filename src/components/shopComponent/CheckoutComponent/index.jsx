import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import useRedox from '../../../hook/useRedox'
import PaymentOption from "./PaymentOption"
import ProductCart from './ProductCart'
import ShipingAddress from './ShipingAddress'



const stripeSession = loadStripe("pk_test_51DicdRHgNP4jLX4FOSbrs1bcOqiPRlnhXwdzKblsNVjYMRvynTbRnq0rLkur0vByxwOiHR7FKWTGOh0htIF7yBws009MURZU5C")


const CheckoutComponent = () => {
    const { gstate } = useRedox()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const getShipingData = (data) => {
        console.log(data);
    }

    const iscartEmpty = Boolean(gstate?.data?.cart?.contents?.nodes.length) ?? false

    if (iscartEmpty === false) {
        router.push({
            pathname: "/shop"
        })
    }

    return (
        <Elements stripe={stripeSession}>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 order-md-1 mb-4">
                            <ShipingAddress register={register} />
                        </div>
                        <div className="col-md-6 order-md-2 mb-4">
                            <ProductCart />
                            <PaymentOption />
                        </div>

                    </div>
                </div>
            </section>
        </Elements>
    )
}

export default CheckoutComponent
