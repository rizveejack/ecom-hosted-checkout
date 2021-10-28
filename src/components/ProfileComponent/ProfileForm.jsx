import { useForm } from "react-hook-form";

const ProfileForm = () => {
    const { register, handleSubmit, formState: { error } } = useForm()
    const getFormData = (data) => {
        console.log(data);
    }

    return (
        <section className="checkout-steps-form-content" >
            <form onSubmit={handleSubmit(getFormData)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>Your Name</label>
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
                                    {...register("postcode", { required: true })}
                                    type="text" placeholder="Post Code" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Country</label>
                            <div className="select-items">
                                <select className="form-control" {...register("country", { required: true })}>
                                    <option value>select</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="US">United State</option>
                                    <option value="AUS">Australiea</option>
                                    <option value="UK">United Kingdom</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Region/State</label>
                            <div className="form-input form">
                                <input
                                    {...register("city", { required: true })}
                                    type="text" placeholder="Country" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>Your Bio</label>
                            <div className="select-items">
                                <textarea
                                    {...register("description")}
                                    className="form-control" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="price-table-btn button mt-3">
                        <button className="btn btn-alt" type="submit">Update Profile</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ProfileForm
