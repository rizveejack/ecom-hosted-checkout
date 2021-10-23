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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" {...register("login", { required: true })} />
                <small>{errors?.login && "this fild is required"}</small>
            </div>
            <div>
                <input type="text" {...register("password", { required: true })} />
                <small>{errors?.password && "this fild is required"}</small>
            </div>
            <div>
                <button type="submit">login</button>
            </div>
        </form>
    )
}

export default LoginForm
