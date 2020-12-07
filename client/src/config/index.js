import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = 'http://localhost:4000/'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
})

export default client