import { gql } from "@apollo/client";
const RJ_ALL_PRODUCT = gql`query ALL_PRODUCT($after: String = "", $first: Int = 4) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          databaseId
          type
          featured
          productId: databaseId
          averageRating
          slug
          image {
            id
            altText
            sourceUrl
          }
          name
          ... on SimpleProduct {
            price
            regularPrice
            id
          }
          ... on VariableProduct {
            price
            id
            regularPrice
          }
          ... on ExternalProduct {
            price
            id
            externalUrl
            regularPrice
          }
          ... on GroupProduct {
            id
            products {
              nodes {
                ... on SimpleProduct {
                  id
                  price
                  regularPrice
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export default RJ_ALL_PRODUCT;