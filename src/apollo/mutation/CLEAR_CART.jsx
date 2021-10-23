import { gql } from "@apollo/client"

const CLEAR_CART = gql`
mutation CLEAR_CART( $input: RemoveItemsFromCartInput! ) {
  removeItemsFromCart(input: $input) {
    cartItems {
      quantity
    }
  }
}
`

export default CLEAR_CART