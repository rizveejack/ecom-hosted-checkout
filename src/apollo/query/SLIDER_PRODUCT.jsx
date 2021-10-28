import { gql } from "@apollo/client"

const SLIDER_PRODUCT = gql`query SLIDE_PRODUCT($first: Int = 10) {
    products(first: $first, where: {taxonomyFilter: {}, featured: true}) {
      edges {
        node {
          id
          description
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
    }
  }
  `


export default SLIDER_PRODUCT