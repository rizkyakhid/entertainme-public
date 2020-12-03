const axios = require('axios')
const movieUrl = process.env.movieUrl || 'http://localhost:3004/'
const seriesUrl = process.env.seriesUrl || 'http://localhost:3002/'

class EntertainMeController {
  static async getAll(req, res) {
    try {
      const movies = await axios({
        method: 'get',
        url: movieUrl
      })
      const series = await axios({
        method: 'get',
        url: seriesUrl
      })
      res.status(200).json({ movies: movies.data, series: series.data })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = EntertainMeController