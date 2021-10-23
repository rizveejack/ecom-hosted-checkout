import { gql } from "@apollo/client"

const GET_ORDER_TOTAL = gql`
query GET_ORDER_TOTAL( $orderId: ID! ) {
  order(id: $orderId, idType: DATABASE_ID) {
    total(format: RAW)
  }
}`

export default GET_ORDER_TOTAL