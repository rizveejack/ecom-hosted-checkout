import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Search = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const onSubmit = (value) => {
        router.push({
            pathname: "/search",
            query: { q: value.search }
        })

    }

    return (

        <div className="main-menu-search">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="navbar-search search-style-5">
                    <div className="search-input">
                        <input type="text" placeholder="Search" {...register("search", { required: true })} />
                    </div>
                    <div className="search-btn">
                        <button type="submit">
                            <i className="lni lni-search-alt"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Search
