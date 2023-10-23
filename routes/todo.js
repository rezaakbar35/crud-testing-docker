const route = require('express').Router()
const controller = require('../controllers/todo')

route.get('/health-check', controller.healthcheck)
route.get('/', controller.index)
route.get('/:id', controller.detail)
route.post('/add', controller.add)
route.delete('/delete/:id', controller.delete)

module.exports = route