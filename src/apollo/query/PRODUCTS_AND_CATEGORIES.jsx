import { gql } from "@apollo/client";
const PRODUCTS_AND_CATEGORIES = gql`query {
  productCategories(first: 3) {
    nodes {
      id
      name
      slug
      image {
        id
        sourceUrl
        srcSet
      }
    }
  }
  products(first: 50) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
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
`

export default PRODUCTS_AND_CATEGORIES;