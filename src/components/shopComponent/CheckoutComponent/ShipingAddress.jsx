import React from 'react'
import ShipingMethod from './ShipingMethod'

const ShipingAddress = ({ register }) => {
    return (
        <li>
            <h6 className="title">Shipping Address</h6>
            <section className="checkout-steps-form-content collapse show" id="collapseFour" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>User Name</label>
                            <div className="row">
                                <div className="col-md-6 form-input form">
                                    <input
                                        {...register("firstName", { required: true })}
                                        type="text" placeholder="First Name" />
                                </div>
                                <div className="col-md-6 form-input form">
                                    <input
                                        {...register("lastName", { required: true })}
                                        type="text" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Email Address</label>
                            <div className="form-input form">
                                <input
                                    {...register("email", { required: true })}
                                    type="text" placeholder="Email Address" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Phone Number</label>
                            <div className="form-input form">
                                <input
                                    {...register("phone", { required: true })}
                                    type="text" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>YourAddress</label>
                            <div className="form-input form">
                                <input
                                    {...register("address1", { required: true })}
                                    type="text" placeholder="Mailing Address" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>City</label>
                            <div className="form-input form">
                                <input
                                    {...register("city", { required: true })}
                                    type="text" placeholder="City" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Post Code</label>
                            <div className="form-input form">
                                <input
                                    {...register("zip", { required: true })}
                                    type="text" placeholder="Post Code" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>State</label>
                            <div className="form-input form">
                                <input
                                    {...register("state", { required: true })}
                                    type="text" placeholder="Country" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Country</label>
                            <div className="select-items">
                                <select
                                    {...register("country", { required: true })}
                                    className="form-control">
                                    <option>select</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="US">UnitedState</option>
                                    <option value="AUS">Australiea</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <ShipingMethod register={register} />
                </div>
            </section>
        </li>
    )
}

export default ShipingAddress
