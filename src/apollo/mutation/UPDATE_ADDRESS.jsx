import { gql } from "@apollo/client"

const UPDATE_ADDRESS = gql`mutation UpdateCustomer($email: String = "", $lastName: String = "", $address1: String = "", $city: String = "", $country: CountriesEnum = AD, $phone: String = "", $postcode: String = "", $state: String = "", $firstName: String = "") {
    updateCustomer(
      input: {email: $email, lastName: $lastName, shipping: {address1: $address1, city: $city, country: $country, phone: $phone, postcode: $postcode, state: $state, firstName: $firstName}}
    ) {
      customer {
        email
      }
    }
  }
  `

export default UPDATE_ADDRESS