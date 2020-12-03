const Series = require('../models/index')

class SeriesController {
  static async findAll(req, res) {
    try {
      const series = await Series.findAll()
      res.send(series)
    }
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(req, res) {
    const { id } = req.params

    try {
      const series = await Series.findOne(id)
      res.send(series)
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
      res.send(series)
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
      res.send(series)
    } 
    catch (error) {
      
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      const data = await Series.delete(id)
      res.send(data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = SeriesController