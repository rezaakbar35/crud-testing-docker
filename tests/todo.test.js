const app = require('../app')
const request = require('supertest')

describe('Todo Unit Test', () => {
    test('Add New Todo', (done) => {
        const newTodo = {
            title: "Todo new",
            is_check: "false"
        }

        request(app)
            .post('/to-do/add')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Succesfully add new task!')
                done()
            })
            .catch(done)
    })

    test('Get Specific Todo', (done) => {
        request(app)
            .get('/to-do/2')
            .expect(200)
            .then(response => {
                expect(response.body.data.id).toBe(2)
                done()
            })
            .catch(done)
    })

    test('Delete Specific Todo', (done) => {
        request(app)
            .delete('/to-do/delete/1')
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Task succesfully deleted!')
                done()
            })
            .catch(done)
    })
})