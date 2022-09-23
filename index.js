const express = require('express')
const cors = require('cors')

const router = require('./app/routes/contact')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contacts/', router)

module.exports = app
