const { ApolloServer, gql } = require('apollo-server')
const axios = require('axios')

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type Query {
    movies: [Movie]
    movie(_id: ID): Movie
  }
  input newMovie {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type Mutation {
    addMovie(newAddedMovie: newMovie): Movie
    editMovie(_id: ID, newEditedMovie: newMovie): Movie
    deleteMovie(_id: ID): Movie
  }
`

const resolvers = {
  Query: {
    movies: async () => {
      try {
        const movies = await axios({
          method: 'get',
          url: 'http://localhost:3004/'
        })
        return movies.data
      }
      catch (error) {
        console.log(error)
      }
    },
    movie: async (parent, args, context, info) => {
      try {
        const { _id } = args
        const movie = await axios({
          method: 'get',
          url: 'http://localhost:3004/' + _id
        })
        return movie.data
      } 
      catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    addMovie: async (parent, args) => {
      try {
        const newAddedMovie = args.newAddedMovie
        const newMovie = await axios({
          method: 'post',
          url: 'http://localhost:3004/',
          data: newAddedMovie
        })
        return newMovie.data
      } 
      catch (error) {
        console.log(error)  
      }
    },
    editMovie: async (parent, args) => {
      try {
        const newEditedMovie = args.newEditedMovie
        const { _id } = args
        const newMovie = await axios({
          method: 'put',
          url: 'http://localhost:3004/' + _id,
          data: newEditedMovie
        })
        return newMovie.data
      } 
      catch (error) {
        console.log(error)  
      }
    },
    deleteMovie: async (parent, args) => {
      try {
        const { _id } = args
        const deletedMovie = await axios({
          method: 'delete',
          url: 'http://localhost:3004/' + _id
        })
        return deletedMovie.data
      } 
      catch (error) {
        console.log(error)  
      }
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})