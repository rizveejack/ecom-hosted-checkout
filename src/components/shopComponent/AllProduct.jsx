import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import ALL_PRODUCT from "../../apollo/query/ALL_PRODUCT";
import ProductCart from "../Product/ProductCart";



const AllProduct = (props) => {
    const { products: { edges, pageInfo } } = props
    const { data, fetchMore } = useQuery(ALL_PRODUCT, {
        notifyOnNetworkStatusChange: true
    })

    const allproducts = data?.products?.edges ?? edges
    const endCursor = data?.products?.pageInfo?.endCursor ?? pageInfo.endCursor
    const hasNextPage = data?.products?.pageInfo?.hasNextPage ?? pageInfo.hasNextPage



    const loadMore = () => {
        fetchMore({
            variables: {
                first: 4,
                after: endCursor
            }
        })
    }

    console.log(data);

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
                        dataLength={allproducts.length}
                        next={loadMore}
                        hasMore={hasNextPage}
                        loader={null}
                        endMessage={<p className="text-center mt-5">✅ All posts loaded.</p>}
                    >
                        <div className="row">
                            {allproducts.map((product) => {
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
