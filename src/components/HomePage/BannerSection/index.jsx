import { useQuery } from "@apollo/client"
import React from 'react'
import GET_CATEGORIES from "../../../apollo/query/GET_CATEGORIES"
import SingleBanner from './SingleBanner'

const BannerSection = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES)
    const category = data?.productCategories?.edges ?? []
    const motherCat = category.filter((cat) => cat.node.parentId === null)

    return (
        <section className="banner section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Most Populer Category</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {motherCat.map((cat) => {
                        return <SingleBanner {...cat.node} key={cat.node.id} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default BannerSection
