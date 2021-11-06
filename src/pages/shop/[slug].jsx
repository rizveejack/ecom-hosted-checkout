import Image from "next/image";
import client from "../../apollo/client";
import PRODUCT_SLUGS from "../../apollo/query/ALL_PRODUCT_SLUGS";
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
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc/Op/PQAHkQL9VgAfCwAAAABJRU5ErkJggg=="
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

    data?.products?.nodes.map((product) => {
        if (product?.slug) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}

export default SingleProduct
