import { gql } from "@apollo/client"
const ALL_PRODUCT_SLUGS = gql` query Products {
    products(first: 5000) {
      nodes {
        id
        slug
      }
    }
  }
  `
export default ALL_PRODUCT_SLUGS