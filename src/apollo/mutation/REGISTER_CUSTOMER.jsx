import { gql } from "@apollo/client"

const REGISTER_CUSTOMER = gql`mutation RegisterCustomer($address1: String = "", $city: String = "", $country: CountriesEnum = AD, $email: String = "", $firstName: String = "", $lastName: String = "", $phone: String = "", $postcode: String = "", $state: String = "", $firstName1: String = "", $lastName1: String = "") {
    updateCustomer(
      input: {billing: {address1: $address1, city: $city, country: $country, email: $email, firstName: $firstName, lastName: $lastName, phone: $phone, postcode: $postcode, state: $state}, firstName: $firstName1, lastName: $lastName1}
    ) {
      customer {
        role
      }
    }
  }
  `

export default REGISTER_CUSTOMER