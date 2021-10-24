import client from "../../apollo/client";
import PRODUCT_SLUGS from "../../apollo/query/ALL_PRODUCT_SLUGS";
import PRODUCT_BY_SLUG from "../../apollo/query/PRODUCT_BY_SLUG";
import FrontEnd from "../../layout/FrontEnd";

const SingleProduct = (props) => {
    console.log(props);
    return (
        <FrontEnd>
            This is Single product
        </FrontEnd>
    )
}

export const getStaticProps = async (context) => {

    const { params: { slug } } = context

    const { data } = await client.query({
        query: PRODUCT_BY_SLUG,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!product?.slug) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}

export default SingleProduct
