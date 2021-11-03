import { gql } from "@apollo/client"

const ORDERDETAILS = gql`query Orders($id: ID = "") {
    order(id: $id, idType: DATABASE_ID) {
      orderNumber
      metaData {
        key
        value
      }
      shipping {
        firstName
        address1
        address2
        postcode
        state
        phone
        email
        country
        company
        city
      }
      lineItems {
        nodes {
          product {
            name
            id
            productCategories {
              edges {
                node {
                  name
                }
              }
            }
            productTags {
              nodes {
                name
              }
            }
            galleryImages {
              edges {
                node {
                  mediaItemUrl
                }
              }
            }
          }
          quantity
          subtotal
          total
        }
      }
      subtotal
      total
      shippingTotal
      shippingLines {
        nodes {
          total
        }
      }
    }
  }`


export default ORDERDETAILS