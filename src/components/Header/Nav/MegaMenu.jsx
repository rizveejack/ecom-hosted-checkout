import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import Link from "next/link";
import GET_CATEGORIES from "../../../apollo/query/GET_CATEGORIES";
import ChildMenu from "./ChildMenu";

const MegaMenu = () => {
    const { data } = useQuery(GET_CATEGORIES)


    const productCategories = data?.productCategories?.edges ?? []
    const motherCat = productCategories.filter((cat) => cat.node.parentId === null)



    return (
        <div className="mega-category-menu">
            <span className="cat-button"><i className="lni lni-menu"></i>All Categories</span>
            <ul className="sub-category">
                {motherCat && motherCat.map((cat) => {
                    return (
                        <li key={cat.node.id}>
                            <Link href={`/category/${cat.node.slug}`}>
                                {cat.node.name}
                            </Link>
                            {
                                !isEmpty(cat.node.children.edges)
                                &&
                                <ChildMenu {...cat.node.children} />
                            }

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MegaMenu
