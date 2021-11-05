import { gql } from "@apollo/client"

const SIGNUP = gql`mutation SIGNUP($username: String = "", $email: String = "", $lastName: String = "", $firstName: String = "") {
  registerUser(
    input: {username: $username, email: $email, lastName: $lastName, firstName: $firstName}
  ) {
    user {
      id
      username
    }
  }
}    
`

export default SIGNUP