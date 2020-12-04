const axios = require('axios')
const movieUrl = process.env.movieUrl || 'http://localhost:3004/'
const Redis = require('ioredis')
const redis = new Redis()

class MovieController {
  static async findAll(req, res) {
    try {
      const movieCache = await redis.get('movies')
      if(movieCache) {
        console.log('Ini di kondisi REDIS')
        res.status(200).json(JSON.parse(movieCache))
      }
      else {
        const movies = await axios({
          method: 'get',
          url: movieUrl
        })
        const setRedis = await redis.set('movies', JSON.stringify({ movies: movies.data }))
        res.status(200).json(movies.data)
      }
    } 
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params
      const movie = await axios({
        method: 'get',
        url: movieUrl + id
      })
      res.status(200).json(movie.data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  static async add(req, res) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      const movie = await axios({
        method: 'post',
        url: movieUrl,
        data: { title, overview, poster_path, popularity, tags }
      })
      console.log('Successfully added movie!')
      const delMovieCache = await redis.del('movies')
      const delEntertainMeCache = await redis.del('entertainMe')
      res.status(200).json(movie.data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  static async update(req, res) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      const { id } = req.params
      const movie = await axios({
        method: 'put',
        url: movieUrl + id,
        data: { title, overview, poster_path, popularity, tags }
      })
      const delMovieCache = await redis.del('movies')
      const delEntertainMeCache = await redis.del('entertainMe')
      res.status(200).json(movie.data)
    } catch (error) {
      console.log(error)
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params
      const movie = await axios({
        method: 'delete',
        url: movieUrl + id
      })
      console.log(movie)
      const delMovieCache = await redis.del('movies')
      const delEntertainMeCache = await redis.del('entertainMe')
      res.status(200).json(movie.data)
    } 
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = MovieController