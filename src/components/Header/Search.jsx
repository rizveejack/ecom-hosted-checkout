import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import GET_CATEGORIES from "../../apollo/query/GET_CATEGORIES";

const Search = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()
    const { loading, error, data } = useQuery(GET_CATEGORIES, {
        variables: {
            first: 100
        }
    })

    const productCategories = data?.productCategories?.nodes ?? []

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
                    <div className="select-position">
                        <select id="select1" {...register("cat")}>
                            <option defaultValue={"all"} value="all">All</option>
                            {productCategories && productCategories.map((cat) => {
                                return (
                                    <option value={cat.slug} key={cat.id}>
                                        {cat.name}
                                    </option>

                                )
                            })}
                        </select>
                    </div>
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
