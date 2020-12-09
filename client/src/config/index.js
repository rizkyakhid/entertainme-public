import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client'

const uri = 'http://localhost:4000/'
export const favoriteEntertainment = makeVar([])

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favorites: {
            read: () => {
              return favoriteEntertainment()
            }
          }
        }
      }
    }
  })
})

export default client