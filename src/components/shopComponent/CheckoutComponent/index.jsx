import React from 'react'
import { useForm } from 'react-hook-form'
import CreaditCard from './CreaditCard'
import ShipingAddress from './ShipingAddress'



const CheckoutComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const getShipingData = (data) => {
        console.log(data);
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
