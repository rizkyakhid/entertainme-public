const express = require('express')
const routes = require('./routes/index')
const app = express()
const PORT = process.env.PORT || 3004

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => console.log('Listening to movie server at port:', PORT))