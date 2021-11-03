import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Search = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const onSubmit = (value) => {
        router.push({
            pathname: "/s",
            query: { data: JSON.stringify(value) }
        })

    }

    return (

        <div className="main-menu-search">

            <div className="navbar-search search-style-5">
                <div className="search-select">
                </div>
                <div className="search-input">
                    <input type="text" placeholder="Search" {...register("search", { required: true })} />
                </div>
                <div className="search-btn">
                    <button onClick={handleSubmit(onSubmit)}><i className="lni lni-search-alt"></i></button>
                </div>
            </div>

        </div>

    )
}

export default Search
