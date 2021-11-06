import { gql } from "@apollo/client"

const HOMEPAGE_QUERY = gql`query HOMEPAGE_QUERY{
    productCategories(first:100) {
      edges {
        node {
          id
          name
          slug
          count
          image {
            sourceUrl
          }
          parentId
          children {
            edges {
              node {
                id
                name
                slug
                count
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
    products(first:8){
      edges {
        node {
          id
          databaseId
          type
          featured
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
            id
            regularPrice
            productCategories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
          ... on VariableProduct {
            price
            id
            regularPrice
            productCategories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
          ... on ExternalProduct {
            price
            id
            externalUrl
            regularPrice
            productCategories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
          ... on GroupProduct {
            id
            products {
              nodes {
                ... on SimpleProduct {
                  id
                  price
                  regularPrice
                  productCategories {
                    edges {
                      node {
                        name
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
          reviewCount
          sku
        }
      }
    }
  }
  `

export default HOMEPAGE_QUERY