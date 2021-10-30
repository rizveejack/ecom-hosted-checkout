import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import UPDATE_USER from "../../apollo/mutation/UPDATE_USER";
import VIEWER from "../../apollo/query/VIEWER";

const ProfileForm = ({ viewer }) => {
    const [updateUser, { loading, data }] = useMutation(UPDATE_USER, {
        refetchQueries: [VIEWER]
    })
    const { register, handleSubmit, formState: { error } } = useForm()

    const getFormData = (data) => {
        updateUser({
            variables: data
        })

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
                                        defaultValue={viewer.firstName}
                                        {...register("firstName", { required: true })}
                                        type="text" placeholder="First Name" />
                                </div>
                                <div className="col-md-6 form-input form">
                                    <input
                                        defaultValue={viewer.lastName}
                                        {...register("lastName", { required: true })}
                                        type="text" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>Email Address</label>
                            <div className="form-input form">
                                <input
                                    defaultValue={viewer.email}
                                    {...register("email", { required: true })}
                                    type="text" placeholder="Email Address" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="single-form form-default">
                            <label>Your Bio data</label>
                            <div className="form-group">
                                <textarea
                                    defaultValue={viewer.description}
                                    {...register("description", { required: true })}
                                    className="form-control"
                                    rows="6"
                                />


                            </div>
                        </div>
                    </div>
                    <div className="price-table-btn button mt-3">
                        <button className="btn btn-alt" type="submit">
                            Update Profile {loading && "..."}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ProfileForm
