import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import RESET_PASSWORD from "../../apollo/mutation/RESET_PASSWORD";

const ResetPassForm = (props) => {
    const { register, errors: formError, handleSubmit } = useForm()
    const [setPassword, { loading }] = useMutation(RESET_PASSWORD)

    const onSubmit = (data) => {
        const value = {
            key: props.resetKey,
            login: props.login,
            password: data.password
        }

        setPassword({
            variables: value
        })
    }
    return (
        <div className="account-login section">
            <div className="container col-4">
                <form className="card p-3" onSubmit={handleSubmit(onSubmit)} >

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        <small className="text-danger">{formError?.password && "This fild is required"}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Set Password{loading && "..."}</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassForm
