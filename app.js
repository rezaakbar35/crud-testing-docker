require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes')
const port = process.env.PORT || 8010
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', router)

if (process.env.NODE_ENV != "test") {
    app.listen(port, () => {
        console.log(`Connected on http://localhost:${port}`)
    })
}

module.exports = app