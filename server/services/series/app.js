const express = require('express')
const routes = require('./routes/index')
const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => console.log('Listening to series server at port:', PORT))