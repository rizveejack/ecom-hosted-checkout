import client from "../../apollo/client";
import GET_CATEGORIES from "../../apollo/query/GET_CATEGORIES";
import PRODUCT_BY_CATEGORY from "../../apollo/query/PRODUCT_BY_CATEGORY";
import CategoryComponent from "../../components/CategoryComponent";
import FrontEnd from "../../layout/FrontEnd";


const CategoryProduct = ({ productCategory }) => {
    return (
        <FrontEnd>
            <CategoryComponent  {...productCategory} />
        </FrontEnd>
    )
}


export const getStaticPaths = async () => {
    const data = await client.query({
        query: GET_CATEGORIES
    })

    const pathsData = []

    data?.data?.productCategories?.edges.map((product) => {
        if (product?.node?.slug) {
            pathsData.push({ params: { slug: product?.node?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}


export const getStaticProps = async (context) => {
    const { params: { slug } } = context
    const data = await client.query({
        query: PRODUCT_BY_CATEGORY,
        variables: { slug }
    })
    return {
        props: data?.data || {},
        revalidate: 1
    }
}



export default CategoryProduct
