import { gql } from "@apollo/client"

const UPDATE_USER = gql`mutation UPDATE_USER($id: ID = "dXNlcjox", $firstName: String = "", $email: String = "", $description: String = "", $lastName: String = "") {
    updateUser(
      input: {id: $id, firstName: $firstName, email: $email, description: $description, lastName: $lastName}
    ) {
      user {
        firstName
        name
      }
    }
  }
  `

export default UPDATE_USER