import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import LOGIN from "../../apollo/mutation/LOGIN";
import VIEWER from "../../apollo/query/VIEWER";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [LoginAction, { loading, error, data }] = useMutation(LOGIN, {
        refetchQueries: [VIEWER]
    })
    const onSubmit = (data) => {
        console.log(data);
        LoginAction({
            variables: data
        })
    }

    return (
        <div className="account-login section">
            <div className="container col-4">
                <form className="card p-3" onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" {...register("login", { required: true })} />
                        <small className="text-danger">{errors?.login && "This fild is required"}</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        <small className="text-danger">{errors?.password && "This fild is required"}</small>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login{loading && "..."}</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
