import { useQuery } from "@apollo/client"
import React from 'react'
import GET_CATEGORIES from "../../../apollo/query/GET_CATEGORIES"
import SingleBanner from './SingleBanner'

const BannerSection = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES)
    const category = data?.productCategories?.edges ?? []

    return (
        <section className="banner section">
            <div className="container">
                <div className="row justify-content-center">
                    {category.map((cat) => {
                        return <SingleBanner {...cat.node} key={cat.node.id} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default BannerSection
