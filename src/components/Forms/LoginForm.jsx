import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import LOGIN from "../../query/LOGIN";
import VIEWER from "../../query/VIEWER";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [LoginAction, { loading, error, data }] = useMutation(LOGIN, {
        refetchQueries: [VIEWER]
    })
    const onSubmit = (data) => {
        LoginAction({
            variables: data
        })
    }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <div>
        //         <input type="text" {...register("login", { required: true })} />
        //         <small>{errors?.login && "this fild is required"}</small>
        //     </div>
        //     <div>
        //         <input type="text" {...register("password", { required: true })} />
        //         <small>{errors?.password && "this fild is required"}</small>
        //     </div>
        //     <div>
        //         <button type="submit">login</button>
        //     </div>
        // </form>

        <div className="account-login section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                        <form className="card login-form">
                            <div className="card-body">
                                <div className="form-group input-group">
                                    <label htmlFor="reg-fn">Email</label>
                                    <input className="form-control" type="email" id="reg-email" required="" autoComplete="off" />
                                </div>
                                <div className="form-group input-group">
                                    <label htmlFor="reg-fn">Password</label>
                                    <input className="form-control" type="password" id="reg-pass" required="" autoComplete="off" />
                                </div>
                                <div className="d-flex flex-wrap justify-content-between bottom-content">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                                        <label className="form-check-label">Remember me</label>
                                    </div>
                                    <a className="lost-pass" href="account-password-recovery.html">Forgot password?</a>
                                </div>
                                <div className="button">
                                    <button className="btn" type="submit">Login</button>
                                </div>
                                <p className="outer-link">Dont have an account? <a href="register.html">Register here </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
