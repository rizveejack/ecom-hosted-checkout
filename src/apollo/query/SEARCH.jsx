import { gql } from "@apollo/client"

const SEARCH = gql`query SEARCH($search: String = "", $first: Int = 10, $after: String = "") {
    products(
      where: {search: $search}
      first: $first
      after: $after
    ) {
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
        endCursor
        hasNextPage
      }
    }
  }
  `

export default SEARCH