import { gql } from "@apollo/client"

const UPDATE_USER = gql`mutation updateProfile(
  $id: ID!
  $firstName: String!,
  $lastName: String!,
  $email: String!
  $description: String!
) {
  updateUser(input: {
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    description:$description
  }) {
    user {
      databaseId
    }
  }
}
  `

export default UPDATE_USER