import { isEmpty } from "lodash"
import Link from "next/link"

const ChildMenu = (props) => {
    const { edges } = props

    return (
        <ul className="inner-sub-category">
            {!isEmpty(edges) && edges.map((children) => {
                return (
                    <li key={children.node.id}>
                        <Link href={`/category/${children.node.slug}`}>
                            {children.node.name}
                        </Link>
                    </li>
                )
            })}

        </ul>
    )
}

export default ChildMenu
