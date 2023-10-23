const route = require('express').Router()
const todoRoute = require('./todo')

route.use('/to-do', todoRoute)

module.exports = route