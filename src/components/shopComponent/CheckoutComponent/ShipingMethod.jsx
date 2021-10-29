import Image from "next/image"

const ShipingMethod = ({ register }) => {
    return (
        <div className="col-md-12">
            <div className="checkout-payment-option">
                <h6 className="heading-6 font-weight-400 payment-title">Select Delivery
                    Option</h6>
                <div className="payment-option-wrapper">
                    <div className="single-payment-option">
                        <input
                            {...register("free")}
                            defaultChecked
                            value="free"
                            type="radio" name="shipping" id="shipping-1" />
                        <label htmlFor="shipping-1">
                            <Image
                                width={100}
                                height={40}
                                layout="fixed"
                                src="/images/placeholder.png"
                                alt="Sipping" />
                            <p>Free Shipping</p>
                            <span className="price">$00.00</span>
                        </label>
                    </div>
                    <div className="single-payment-option">
                        <input
                            {...register("DHL")}
                            value="DHL"
                            type="radio" name="shipping" id="shipping-2" />
                        <label htmlFor="shipping-2">
                            <Image
                                width={100}
                                height={40}
                                layout="fixed"
                                src="/images/placeholder.png"
                                alt="Sipping" />
                            <p>DHL Shipping</p>
                            <span className="price">$50.50</span>
                        </label>
                    </div>
                    <div className="single-payment-option">
                        <input
                            {...register("UPS")}
                            value="UPS"
                            type="radio" name="shipping" id="shipping-3" />
                        <label htmlFor="shipping-3">
                            <Image
                                width={100}
                                height={40}
                                layout="fixed"
                                src="/images/placeholder.png"
                                alt="Sipping" />
                            <p>USP Shipping</p>
                            <span className="price">$60.25</span>
                        </label>
                    </div>
                    <div className="single-payment-option">
                        <input
                            {...register("USPS")}
                            value="USPS"
                            type="radio" name="shipping" id="shipping-4" />
                        <label htmlFor="shipping-4">
                            <Image
                                width={100}
                                height={40}
                                layout="fixed"
                                src="/images/placeholder.png"
                                alt="Sipping" />
                            <p>USPS Shipping</p>
                            <span className="price">$4.30</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipingMethod
