import Image from "next/image";
import client from "../../apollo/client";
import ALL_PRODUCT_SLUGS from "../../apollo/query/ALL_PRODUCT_SLUGS";
import PRODUCT_BY_SLUG from "../../apollo/query/PRODUCT_BY_SLUG";
import AddToCart from "../../components/Product/AddToCart";
import FrontEnd from "../../layout/FrontEnd";

const SingleProduct = ({ product }) => {


    return (
        <FrontEnd>
            <section className="section" style={{ marginTop: "12px" }}>
                <div className="container">
                    <div className="text-center">
                        <Image
                            className="rounded mx-auto d-block"
                            src={product?.image?.sourceUrl ?? "/images/placeholder.png"}
                            alt="#"
                            height={400}
                            width={400}
                            layout="intrinsic"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P9fDAAFGwIWTcQ9nAAAAABJRU5ErkJggg=="
                            placeholder="blur"
                        />
                    </div>
                    <div className="section-title">
                        <h2>{product?.name}</h2>
                        <div dangerouslySetInnerHTML={{ __html: product?.description }} />
                        <h3>{product?.price}</h3>
                    </div>
                    <div className="text-center">
                        <AddToCart {...product} />
                    </div>
                </div>
            </section>
        </FrontEnd>
    )
}




export const getStaticPaths = async () => {
    const data = await client.query({ query: ALL_PRODUCT_SLUGS })
    const paths = data?.data?.products?.nodes.map((pdata) => {

        return {
            params: { slug: pdata.slug }
        }
    })

    return {
        paths: paths,
        fallback: true,
    };


}

export const getStaticProps = async (context) => {
    const { params: { slug } } = context

    const { data } = await client.query({
        query: PRODUCT_BY_SLUG,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product ?? null,
        },
        revalidate: 1,

    }
}


export default SingleProduct
