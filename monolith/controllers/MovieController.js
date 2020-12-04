const Movie = require('../models/Movie')

class MovieController {
  static async findAll(req, res) {
    try {
      const movies = await Movie.findAll()
      res.status(200).json(movies)
    }
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(req, res) {
    const { id } = req.params

    try {
      const movie = await Movie.findOne(id)
      res.status(200).json(movie)
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
      res.status(201).json(movie)
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
      res.status(200).json(movie)
    } 
    catch (error) {
      
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      const data = await Movie.delete(id)
      res.status(200).json(data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = MovieController