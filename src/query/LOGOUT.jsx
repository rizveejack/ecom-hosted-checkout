import { gql } from "@apollo/client"

const LOGOUT = gql`mutation MyMutation($input: LogoutInput = {}) {
    logout(input: $input) {
      status
    }
  }`

export default LOGOUT