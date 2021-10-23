import { gql } from "@apollo/client"

const CHECKOUT = gql`
mutation CHECKOUT( $input: CheckoutInput! ) {
  checkout(input: $input) {
    clientMutationId
    order {
      id
      orderKey
      orderNumber
      status
      refunds {
        nodes {
          amount
        }
      }
    }
    result
    redirect
  }
}
`

export default CHECKOUT