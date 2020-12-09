const { gql } = require('apollo-server')
const axios = require('axios')
const movieUrl = process.env.movieUrl || 'http://localhost:3004/'
const Redis = require('ioredis')
const redis = new Redis()

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  extend type Query {
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
  extend type Mutation {
    addMovie(newAddedMovie: newMovie): Movie
    editMovie(_id: ID, newEditedMovie: newMovie): Movie
    deleteMovie(_id: ID): Movie
  }
`

const resolvers = {
  Query: {
    movies: async () => {
      try {
        const movieCache = await redis.get('movies')
        if (movieCache) {
          return JSON.parse(movieCache)
        }
        else {
          const movies = await axios({
            method: 'get',
            url: movieUrl
          })
          await redis.set('movies', JSON.stringify(movies.data))
          return movies.data
        }
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
          url: movieUrl + _id
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
          url: movieUrl,
          data: newAddedMovie
        })
        await redis.del('movies')
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
          url: movieUrl + _id,
          data: newEditedMovie
        })
        await redis.del('movies')
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
          url: movieUrl + _id
        })
        await redis.del('movies')
        return deletedMovie.data
      }
      catch (error) {
        console.log(error)
      }
    }
  }
}

module.exports = { typeDefs, resolvers }