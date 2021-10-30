import { gql } from "@apollo/client"

const ORDER_INFO = gql`query ORDER_INFO($id: ID!) {
    customer(id: $id) {
        orders {
          edges {
            node {
              date
              datePaid
              dateCompleted
              id
              orderKey
              orderNumber
              paymentMethod
              paymentMethodTitle
              status
              total(format: FORMATTED)
              customerIpAddress
              shippingAddressMapUrl
            }
          }
        }
    }
  }`

export default ORDER_INFO