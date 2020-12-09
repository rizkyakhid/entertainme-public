const axios = require('axios')
const movieUrl = process.env.movieUrl || 'http://localhost:3004/'
const seriesUrl = process.env.seriesUrl || 'http://localhost:3002/'
const Redis = require('ioredis')
const redis = new Redis()

class EntertainMeController {
  static async getAll(req, res) {
    try {
      const entertainMeCache = await redis.get('entertainMe')

      if(entertainMeCache) {
        console.log('Ini di kondisi REDIS')
        res.status(200).json(JSON.parse(entertainMeCache))
      }
      else {
        const movies = await axios({
          method: 'get',
          url: movieUrl
        })
        const series = await axios({
          method: 'get',
          url: seriesUrl
        })
        const setRedis = await redis.set('entertainMe', JSON.stringify({ movies: movies.data, series: series.data }))
        res.status(200).json({ movies: movies.data, series: series.data })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = EntertainMeController