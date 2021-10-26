import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import RJ_ALL_PRODUCT from "../../apollo/query/RJ_ALL_PRODUCT";
import ProductCart from "../Product/ProductCart";

const AllProduct = () => {
    const { loading, error, data, fetchMore } = useQuery(RJ_ALL_PRODUCT, {
        notifyOnNetworkStatusChange: true
    })
    const goods = data?.products?.edges ?? []
    const tranding_product = goods

    const loadMore = () => {
        if (data?.products?.pageInfo?.endCursor) {
            fetchMore({
                variables: {

                    after: data?.products?.pageInfo?.endCursor

                }
            })
        }
    }

    return (
        <>
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

                    <InfiniteScroll
                        style={{ overflowX: "hidden" }}
                        dataLength={tranding_product.length}
                        next={loadMore}
                        hasMore={data?.products?.pageInfo?.hasNextPage}
                        loader={<p>Loading...</p>}
                        endMessage={<p>✅ All posts loaded.</p>}
                    >
                        <div className="row">
                            {tranding_product.map((product) => {
                                return (

                                    <ProductCart key={product.node.id} {...product.node} />

                                )
                            })}
                        </div>
                    </InfiniteScroll>

                </div>
            </section>
        </>
    )
}

export default AllProduct
