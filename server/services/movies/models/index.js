const db = require('../config/mongo')
const movieCollection = db.collection('movies')
const { ObjectID } = require('mongodb')

class Movie {
  static async findAll() {
    try {
      const movies = await movieCollection.find().toArray()
      return movies
    }
    catch (error) {
      console.log(error)
    }
  }

  static async findOne(id) {
    try {
      const movies = await movieCollection.findOne({ _id: ObjectID(id) })
      console.log(movies)
      return movies
    }
    catch (error) {
      console.log(error)
    }
  }

  static async add(data) {
    try {
      const movies = await movieCollection.insertOne(data)
      return movies.ops[0]
    }
    catch (error) {
      console.log(error)
    }
  }

  static async update(id, data) {
    try {
      const movies = await movieCollection.findOneAndUpdate(
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
      return movies.value
    }
    catch (error) {
      console.log(error)
    }
  }

  static async delete(id) {
    try {
      const movies = await movieCollection.findOneAndDelete({ _id: ObjectID(id) })
      return movies.value
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = Movie