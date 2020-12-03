const Series = require('../models/Series')

class SeriesController {
  static async findAll(req, res) {
    try {
      const series = await Series.findAll()
      res.status(200).json(series)
    }
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(req, res) {
    const { id } = req.params

    try {
      const series = await Series.findOne(id)
      res.status(200).json(series)
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
      const series = await Series.add(data)
      res.status(201).json(series)
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
      const series = await Series.update(id, updateData)
      res.status(200).json(series)
    } 
    catch (error) {
      
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      const data = await Series.delete(id)
      res.status(200).json(data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = SeriesController