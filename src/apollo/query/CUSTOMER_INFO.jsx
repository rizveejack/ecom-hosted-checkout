import { gql } from "@apollo/client"

const CUSTOMER_INFO = gql`query CUSTOMER_INFO($id: ID!) {
    customer(id: $id) {
      email
      firstName
      lastName
      displayName
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
      shipping {
        phone
        address1
        city
        country
        postcode
        state
      }
    }
  }`

export default CUSTOMER_INFO