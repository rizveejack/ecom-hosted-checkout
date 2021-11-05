import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import SIGNUP from "../../apollo/mutation/SIGNUP";

const SignupForm = () => {
    const { register, error: formError, handleSubmit } = useForm()
    const [loginAction, { loading }] = useMutation(SIGNUP)

    const onSubmit = (data) => {
        loginAction({
            variables: data
        })
    }

    return (
        <div className="account-login section">
            <div className="container col-4">
                <form className="card p-3" onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="text" className="form-control" {...register("firstName", { required: true })} />
                        <small className="text-danger">{formError?.firstName && "This fild is required"}</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" {...register("lastName", { required: true })} />
                        <small className="text-danger">{formError?.lastName && "This fild is required"}</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" className="form-control" {...register("username", { required: true })} />
                        <small className="text-danger">{formError?.username && "This fild is required"}</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" {...register("email", { required: true })} />
                        <small className="text-danger">{formError?.email && "This fild is required"}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Signup{loading && "..."}</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
