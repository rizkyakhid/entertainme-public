const { gql } = require('apollo-server')
const axios = require('axios')
const seriesUrl = process.env.seriesUrl || 'http://localhost:3002/'
const Redis = require('ioredis')
const redis = new Redis()

const typeDefs = gql`
  type Series {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  extend type Query {
    series: [Series]
    seriesId(_id: ID): Series
  }
  input newSeries {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  extend type Mutation {
    addSeries(newAddedSeries: newSeries): Series
    editSeries(_id: ID, newEditedSeries: newSeries): Series
    deleteSeries(_id: ID): Series
  }
`

const resolvers = {
  Query: {
    series: async () => {
      try {
        const seriesCache = await redis.get('series')
        if(seriesCache) {
          return JSON.parse(seriesCache)
        }
        else {
          const series = await axios({
            method: 'get',
            url: seriesUrl
          })
          await redis.set('series', JSON.stringify(series.data))
          return series.data
        }
      }
      catch (error) {
        console.log(error)
      }
    },
    seriesId: async (parent, args) => {
      try {
        const { _id } = args
        const series = await axios({
          method: 'get',
          url: seriesUrl + _id
        })
        return series.data
      } 
      catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    addSeries: async (parent, args) => {
      try {
        const newAddedSeries = args.newAddedSeries
        const newSeries = await axios({
          method: 'post',
          url: seriesUrl,
          data: newAddedSeries
        })
        await redis.del('series')
        return newSeries.data
      } 
      catch (error) {
        console.log(error)  
      }
    },
    editSeries: async (parent, args) => {
      try {
        const newEditedSeries = args.newEditedSeries
        const { _id } = args
        const newSeries = await axios({
          method: 'put',
          url: seriesUrl + _id,
          data: newEditedSeries
        })
        await redis.del('series')
        return newSeries.data
      } 
      catch (error) {
        console.log(error)  
      }
    },
    deleteSeries: async (parent, args) => {
      try {
        const { _id } = args
        const deletedSeries = await axios({
          method: 'delete',
          url: seriesUrl + _id
        })
        await redis.del('series')
        return deletedSeries.data
      } 
      catch (error) {
        console.log(error)  
      }
    }
  }
}

module.exports = { typeDefs, resolvers }