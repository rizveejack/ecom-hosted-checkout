import { gql } from "@apollo/client"

const LOGIN = gql`mutation MyMutation($login: String = "", $password: String = "") {
  loginWithCookies(input: {login: $login, password: $password}) {
    status
  }
}`

export default LOGIN