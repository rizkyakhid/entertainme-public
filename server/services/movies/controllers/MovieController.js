const Movie = require('../models/index')

class MovieController {
  static async findAll(req, res) {
    try {
      const movies = await Movie.findAll()
      res.send(movies)
    }
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(req, res) {
    const { id } = req.params

    try {
      const movie = await Movie.findOne(id)
      res.send(movie)
    }
    catch (error) {
      console.log(error)
    }
  }

  static async add(req, res) {
    const data = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tags: req.body.tags
    }

    try {
      const movie = await Movie.add(data)
      res.send(movie)
    }
    catch (error) {
      console.log(error)
    }
  }

  static async update(req, res) {
    const { id } = req.params
    const updateData = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tags: req.body.tags
    }
    try {
      const movie = await Movie.update(id, updateData)
      res.send(movie)
    } 
    catch (error) {
      
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      const data = await Movie.delete(id)
      res.send(data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = MovieController