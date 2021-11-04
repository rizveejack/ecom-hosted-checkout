import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RJ_ALL_PRODUCT from "../../apollo/query/RJ_ALL_PRODUCT";
import ProductCart from "../Product/ProductCart";

const AllProduct = () => {
    const { data, fetchMore, refetch } = useQuery(RJ_ALL_PRODUCT, {
        notifyOnNetworkStatusChange: true,
    })
    const goods = data?.products?.edges ?? []


    const loadMore = () => {
        if (data?.products?.pageInfo?.endCursor) {
            fetchMore({
                variables: {
                    first: 4,
                    after: data?.products?.pageInfo?.endCursor

                }
            })
        }
    }

    useEffect(() => refetch(), [])

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
                        dataLength={goods.length}
                        next={loadMore}
                        hasMore={data?.products?.pageInfo?.hasNextPage}
                        loader={<p>Loading...</p>}
                        endMessage={<p className="text-center mt-5">✅ All posts loaded.</p>}
                    >
                        <div className="row">
                            {goods.map((product) => {
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
