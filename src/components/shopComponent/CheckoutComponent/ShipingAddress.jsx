import React from 'react'

const ShipingAddress = ({ register }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                        {...register("billing.firstName", { required: true })}
                        type="text" className="form-control" />
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        {...register("billing.lastName", { required: true })}
                        type="text" className="form-control" id="lastName" />
                    <div className="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                <input
                    {...register("billing.email", { required: true })}
                    type="email" className="form-control" placeholder="you@example.com" />
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="email">Phone <span className="text-muted">(Optional)</span></label>
                <input
                    {...register("billing.phone", { required: true })}
                    type="phone" className="form-control" placeholder="Your Phone" />
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                    {...register("billing.address1", { required: true })}
                    type="text" className="form-control" />
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="country">Country</label>
                <select
                    {...register("billing.country", { required: true })}
                    className="custom-select d-block w-100 form-control" >
                    <option value="">Choose...</option>
                    <option value="US">United States</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid country.
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="state">City</label>
                    <input
                        {...register("billing.city", { required: true })}
                        type="text" className="form-control" />
                    <div className="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <input
                        {...register("billing.state", { required: true })}
                        type="text" className="form-control" />
                    <div className="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                        {...register("billing.postcode", { required: true })}
                        type="text" className="form-control" />
                    <div className="invalid-feedback">
                        Zip code required.
                    </div>
                </div>
            </div>
            <div >
                <label>Aditional Note</label>
                <div className="form-group">
                    <textarea
                        {...register("customerNote", { required: true })}
                        rows="6" className="form-control" />
                </div>
            </div>
        </>
    )
}

export default ShipingAddress
