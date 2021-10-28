import { useQuery } from "@apollo/client";
import RJ_ALL_PRODUCT from "../../../apollo/query/RJ_ALL_PRODUCT";
import ProductCart from '../../Product/ProductCart';

const Tranding = () => {
    const { loading, error, data } = useQuery(RJ_ALL_PRODUCT)
    const goods = data?.products?.edges ?? []

    return (
        <section className="trending-product section" style={{ marginTop: "12px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Trending Product</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {goods.map((product) => {
                        return <ProductCart key={product.node.id} {...product.node} />

                    })}
                </div>
            </div>
        </section>
    )
}

export default Tranding
