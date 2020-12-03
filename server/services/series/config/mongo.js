const { MongoClient } = require('mongodb')
const databaseUrl = process.env.databaseUrl || 'mongodb://localhost:27017'
const databaseName = process.env.databaseName || 'entertainMe-db'

const client = new MongoClient(databaseUrl, {useUnifiedTopology: true})
client.connect()

const db = client.db(databaseName)

module.exports = db