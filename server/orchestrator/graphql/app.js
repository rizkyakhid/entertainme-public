const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server')
const movieSchema = require('./schema/movies')
const seriesSchema = require('./schema/series')

const typeDefs = gql`
  type Query
  type Mutation
`

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    movieSchema.typeDefs,
    seriesSchema.typeDefs
  ],
  resolvers: [
    movieSchema.resolvers,
    seriesSchema.resolvers
  ]
})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})