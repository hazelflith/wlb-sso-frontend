import gql from 'graphql-tag'

export const LOGIN = gql`
  query getLogin($email: String!, $password: String!) {
    getLogin(email: $email, password: $password) {
      id
      email
      name
      avatar
      walletAccount
      latestBalance
      roles
      oauth
      chat
      company_id
      company_name
      company_logo
      nip
      position_id
      position_name
      supervisor_id
      thumbnail_url
    }
  }
`
