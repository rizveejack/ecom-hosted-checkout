import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import PRODUCT_BY_CATEGORY from "../../apollo/query/PRODUCT_BY_CATEGORY";
import ProductCart from "../Product/ProductCart";

const CategoryComponent = (props) => {
    const { name, slug, products } = props

    const { data, fetchMore } = useQuery(PRODUCT_BY_CATEGORY, {
        notifyOnNetworkStatusChange: true,
        variables: {
            id: slug

        }
    })

    const allproducts = data?.productCategory?.products?.edges ?? products?.edges
    const endCursor = data?.productCategory?.products?.pageInfo?.endCursor ?? products?.pageInfo.endCursor
    const hasNextPage = data?.productCategory?.products?.pageInfo?.hasNextPage ?? products?.pageInfo.hasNextPage

    const loadMore = () => {
        fetchMore({
            variables: {
                after: endCursor,
                first: 4
            }


        })
    }

    if (isEmpty(allproducts)) {
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
                                <h2>{name} Product</h2>
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
                <button onClick={loadMore}>click</button>
            </section>
        </>
    )
}

export default CategoryComponent
