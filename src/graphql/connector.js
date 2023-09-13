import {ApolloClient} from 'apollo-boost'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {GRAPHQL_URL, TOKEN} from '../utils/globals'
import {onError} from 'apollo-link-error'

const token = TOKEN
const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
})
const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
})

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message}) => {
      console.log(`[GraphQL error]: Message: ${message}`)
    })
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache,
})

export default client
