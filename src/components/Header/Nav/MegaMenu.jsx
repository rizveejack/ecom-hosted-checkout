import { useQuery } from "@apollo/client";
import Link from "next/link";
import GET_CATEGORIES from "../../../apollo/query/GET_CATEGORIES";

const MegaMenu = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES, {
        variables: {
            first: 100
        }
    })

    const productCategories = data?.productCategories?.nodes ?? []
    return (
        <div className="mega-category-menu">
            <span className="cat-button"><i className="lni lni-menu"></i>All Categories</span>
            <ul className="sub-category">
                {productCategories && productCategories.map((cat) => {
                    return (
                        <li key={cat.id}>
                            <Link href={`/category/${cat.slug}`}>
                                {cat.name}
                            </Link>
                        </li>
                    )
                })}
                <li><a href="#">Electronics <i className="lni lni-chevron-right"></i></a>
                    <ul className="inner-sub-category">
                        <li><a href="#">Digital Cameras</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default MegaMenu
