import { gql } from "@apollo/client";

const RESET_PASSWORD = gql`
  mutation resetUserPassword(
    $key: String!
    $login: String!
    $password: String!
  ) {
    resetUserPassword(
      input: {
        key: $key
        login: $login
        password: $password
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;

export default RESET_PASSWORD