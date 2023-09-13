import gql from 'graphql-tag'

export const GET_ALL_CATEGORY = gql`
  subscription {
    competency_categories(limit: 10, offset: 0) {
      id
      description
      fa_class
      name
      status
    }
  }
`
