import client from "../../apollo/client";
import ALL_PRODUCT from "../../apollo/query/ALL_PRODUCT";
import AllProduct from "../../components/shopComponent/AllProduct";
import FrontEnd from "../../layout/FrontEnd";


const Shop = (props) => {
    return (
        <FrontEnd>
            <AllProduct {...props} />
        </FrontEnd>
    )
}

export const getStaticProps = async () => {
    const data = await client.query({
        query: ALL_PRODUCT
    })

    return {
        props: data?.data,
        revalidate: 1
    }
}

export default Shop
