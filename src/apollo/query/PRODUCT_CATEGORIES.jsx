import { gql } from "@apollo/client"
const PRODUCT_CATEGORIES = gql` query PRODUCT_CATEGORIES_SLUGS {
    productCategories {
    nodes {
      id
      slug
      description
    }
  }
}`

export default PRODUCT_CATEGORIES