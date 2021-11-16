import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SEARCH from "../apollo/query/SEARCH";
import ProductCart from "./Product/ProductCart";

const SearchComponent = () => {
    const router = useRouter()
    const query = router.query?.q
    const { data, fetchMore, refetch } = useQuery(SEARCH, {
        variables: {
            search: query
        }
    })

    const empty = isEmpty(data?.products?.edges)
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

    useEffect(() => {
        refetch()
    }, [refetch])

    if (empty) {
        return (
            <section className="section" style={{ marginTop: "12px" }}>
                <div className="container">
                    <div className="section-title">
                        <h2>No Product Found</h2>
                        <p>There is no product to show you.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className="trending-product section" style={{ marginTop: "12px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Search Product</h2>
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

export default SearchComponent
