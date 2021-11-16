import { gql } from "@apollo/client"

const HOMEPAGE_QUERY = gql`query HOMEPAGE_QUERY {
  productCategories(first: 100) {
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
  products(first: 8) {
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
  slider: products(first: 5, where: {featured: true}) {
    edges {
      node {
        id
        name
        slug
        shortDescription
        ... on SimpleProduct {price}
        ... on VariableProduct{price}
        image {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
}
  `

export default HOMEPAGE_QUERY