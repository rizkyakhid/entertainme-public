const axios = require('axios')
const movieUrl = process.env.movieUrl || 'http://localhost:3004/'

class MovieController {
  static async findAll(req, res) {
    try {
      const movies = await axios({
        method: 'get',
        url: movieUrl
      })
      res.status(200).json(movies.data)
    } catch (error) {
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
    } catch (error) {
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
      res.status(200).json(movie.data)
    } catch (error) {
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
      res.status(200).json(movie.data)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = MovieController