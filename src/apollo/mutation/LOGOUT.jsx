import { gql } from "@apollo/client"

const LOGOUT = gql`mutation LOGOUT($input: LogoutInput = {}) {
    logout(input: $input) {
      status
    }
  }    
`

export default LOGOUT