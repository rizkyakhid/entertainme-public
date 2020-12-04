const axios = require('axios')
const seriesUrl = process.env.seriesUrl || 'http://localhost:3002/'
const Redis = require('ioredis')
const redis = new Redis()

class SeriesController {
  static async findAll(req, res) {
    try {
      const seriesCache = await redis.get('series')
      if(seriesCache) {
        console.log('Ini di kondisi REDIS')
        res.status(200).json(JSON.parse(seriesCache))
      }
      else {
        const series = await axios({
          method: 'get',
          url: seriesUrl
        })
        const setRedis = await redis.set('series', JSON.stringify({ series: series.data }))
        res.status(200).json(series.data)
      }
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
      const delSeriesCache = await redis.del('series')
      const delEntertainMeCache = await redis.del('entertainMe')
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
      const delSeriesCache = await redis.del('series')
      const delEntertainMeCache = await redis.del('entertainMe')
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
      const delSeriesCache = await redis.del('series')
      const delEntertainMeCache = await redis.del('entertainMe')
      res.status(200).json(series.data)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = SeriesController