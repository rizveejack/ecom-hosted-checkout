import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import PRODUCT_BY_CATEGORY from "../../apollo/query/PRODUCT_BY_CATEGORY";
import ProductCart from "../Product/ProductCart";

const CategoryComponent = () => {
    const router = useRouter()

    const { loading, error, data, fetchMore } = useQuery(PRODUCT_BY_CATEGORY, {
        notifyOnNetworkStatusChange: true,
        variables: {
            slug: router.query.slug
        }
    })
    const goods = data?.productCategory?.products?.edges ?? []
    const catName = data?.productCategory?.name



    const loadMore = () => {
        if (data?.products?.pageInfo?.endCursor) {
            fetchMore({
                variables: {

                    after: data?.products?.pageInfo?.endCursor

                }
            })
        }
    }

    if (!loading && goods.length == 0) {
        return (
            <>
                <section className="trending-product section" style={{ marginTop: "12px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2>No product Found</h2>
                                    <p>There is no product to show you.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
    return (
        <>
            <section className="trending-product section" style={{ marginTop: "12px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>{catName} Product</h2>
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
                        endMessage={<p>✅ All posts loaded.</p>}
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

export default CategoryComponent
