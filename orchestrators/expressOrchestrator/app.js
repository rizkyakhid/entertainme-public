const express = require('express')
const app = express()
const PORT = 3000
const { MongoClient } = require('mongodb')
const databaseUrl = 'mongodb://localhost:27017'

const client = new MongoClient(databaseUrl, {useUnifiedTopology: true})

client.connect()

const db = client.db('test')

app.get('/', async (req, res) => {
  const UserCollection =  db.collection('users')
  const users = await UserCollection.find()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => console.log('Listening to port:', PORT))