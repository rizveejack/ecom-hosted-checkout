import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import useRedox from '../../../hook/useRedox'
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
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 order-md-1 mb-4">
                        <ShipingAddress register={register} />
                    </div>
                    <div className="col-md-6 order-md-2 mb-4">
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutComponent
