const axios = require('axios')
const seriesUrl = process.env.seriesUrl || 'http://localhost:3002/'

class SeriesController {
  static async findAll(req, res) {
    try {
      const series = await axios({
        method: 'get',
        url: seriesUrl
      })
      res.status(200).json(series.data)
    } catch (error) {
      console.log(error)
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params
      const series = await axios({
        method: 'get',
        url: seriesUrl + id
      })
      res.status(200).json(series.data)
    } catch (error) {
      console.log(error)
    }
  }

  static async add(req, res) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      const series = await axios({
        method: 'post',
        url: seriesUrl,
        data: { title, overview, poster_path, popularity, tags }
      })
      console.log('Successfully added series!')
      res.status(200).json(series.data)
    } catch (error) {
      console.log(error)
    }
  }

  static async update(req, res) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      const { id } = req.params
      const series = await axios({
        method: 'put',
        url: seriesUrl + id,
        data: { title, overview, poster_path, popularity, tags }
      })
      res.status(200).json(series.data)
    } catch (error) {
      console.log(error)
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params
      const series = await axios({
        method: 'delete',
        url: seriesUrl + id
      })
      console.log(series)
      res.status(200).json(series.data)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = SeriesController