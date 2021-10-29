import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import useRedox from '../../../hook/useRedox'
import CreaditCard from './CreaditCard'
import ShipingAddress from './ShipingAddress'



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
        <section className="checkout-wrapper section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="checkout-steps-form-style-1">
                            <ul id="accordionExample">
                                <form onSubmit={handleSubmit(getShipingData)}>
                                    <ShipingAddress register={register} />
                                    <CreaditCard register={register} />
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutComponent
