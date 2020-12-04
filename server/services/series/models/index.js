const db = require('../config/mongo')
const seriesCollection = db.collection('series')
const { ObjectID } = require('mongodb')

class Series {
  static async findAll() {
    try {
      const series = await seriesCollection.find().toArray()
      return series
    }
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(id) {
    try {
      const series = await seriesCollection.findOne({ _id: ObjectID(id) })
      console.log(series)
      return series
    }
    catch (error) {
      console.log(error)
    }
  }

  static async add(data) {
    try {
      const series = await seriesCollection.insertOne(data)
      return series.ops[0]
    }
    catch (error) {
      console.log(error)
    }
  }

  static async update(id, data) {
    try {
      const series = await seriesCollection.findOneAndUpdate(
        {
          _id: ObjectID(id)
        },
        {
          $set: {
            'title': data.title,
            'overview': data.overview,
            'poster_path': data.poster_path,
            'popularity': data.popularity,
            'tags': data.tags
          }
        },
        {
          returnOriginal: false
        }
      )
      return series.value
    }
    catch (error) {
      console.log(error)
    }
  }

  static async delete(id) {
    try {
      const series = await seriesCollection.findOneAndDelete({ _id: ObjectID(id) })
      return series.value
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = Series