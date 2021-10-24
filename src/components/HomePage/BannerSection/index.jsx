import { useQuery } from "@apollo/client"
import React from 'react'
import GET_CATEGORIES from "../../../apollo/query/GET_CATEGORIES"
import SingleBanner from './SingleBanner'

const BannerSection = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES)
    const category = data?.productCategories?.nodes ?? []

    return (
        <section className="banner section">
            <div className="container">
                <div className="row">
                    {category.map((cat) => {
                        return <SingleBanner {...cat} key={cat.id} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default BannerSection
