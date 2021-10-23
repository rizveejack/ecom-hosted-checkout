import { gql } from "@apollo/client"

const GET_ORDER = gql`
query GET_ORDER( $orderId: ID! ) {
  order(id: $orderId, idType: DATABASE_ID) {
    total
    lineItems {
      nodes {
        product {
          id
          productId: databaseId
          name
          type
          onSale
          slug
          image {
            id
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`

export default GET_ORDER