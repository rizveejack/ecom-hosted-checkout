import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import UPDATE_ADDRESS from "../../apollo/mutation/UPDATE_ADDRESS";
import CUSTOMER_INFO from "../../apollo/query/CUSTOMER_INFO";
import useRedox from "../../hook/useRedox";

const ProfileForm = () => {
    const { register, handleSubmit, formState: { error } } = useForm()
    const { gstate } = useRedox()
    const { loading, error: cuserror, data } = useQuery(CUSTOMER_INFO, {
        variables: {
            id: gstate.data.viewer.id
        }
    })

    const [updateInfo, { loading: muteloading, data: mutdata }] = useMutation(UPDATE_ADDRESS, {
        refetchQueries: [CUSTOMER_INFO]
    })

    const customer = data?.customer
    const setSelected = (COUNTRY) => {
        if (COUNTRY === customer?.shipping?.country) {
            return customer?.shipping?.country
        }

    }


    const getFormData = (data) => {
        updateInfo({
            variables: data
        })

        console.log(mutdata);
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
                                        defaultValue={customer?.firstName}
                                        {...register("firstName", { required: true })}
                                        type="text" placeholder="First Name" />
                                </div>
                                <div className="col-md-6 form-input form">
                                    <input
                                        defaultValue={customer?.lastName}
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
                                    defaultValue={customer?.email}
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
                                    defaultValue={customer?.shipping?.phone}
                                    {...register("phone", { required: true })}
                                    type="text" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>Address</label>
                            <div className="form-input form">
                                <input
                                    defaultValue={customer?.shipping?.address1}
                                    {...register("address1", { required: true })}
                                    type="text" placeholder="Address" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>City</label>
                            <div className="form-input form">
                                <input
                                    defaultValue={customer?.shipping?.city}
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
                                    defaultValue={customer?.shipping?.postcode}
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
                                    <option disabled >select</option>
                                    <option value="BD" {...{ value: setSelected("BD") ?? "BD" }}>Bangladesh</option>
                                    <option {...{ value: setSelected("US") ?? "US" }}>United State</option>
                                    <option {...{ value: setSelected("AUS") ?? "AUS" }}>Australiea</option>
                                    <option {...{ value: setSelected("UK") ?? "UK" }}>United Kingdom</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form form-default">
                            <label>Region/State</label>
                            <div className="form-input form">
                                <input
                                    defaultValue={customer?.shipping?.state}
                                    {...register("state", { required: true })}
                                    type="text" placeholder="Country" />
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
