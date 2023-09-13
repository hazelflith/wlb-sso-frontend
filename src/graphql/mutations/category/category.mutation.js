import gql from 'graphql-tag'

export const ADD_NEW_CATEGORY = gql`
  mutation CreateCategory($data: [competency_categories_insert_input!]!) {
    insert_competency_categories(objects: $data) {
      returning {
        id
        name
        status
        description
      }
    }
  }
`
