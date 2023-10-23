const { todo_list } = require('../models');

class TodoController {
    static healthcheck(req, res, next) {
        res.status(200).json({message: "Server Connected"})
    }

    static index(req, res, next) {
        todo_list.findAll()
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static add(req, res, next) {
        todo_list.create({
            title: req.body.title,
            is_check: req.body.is_check
        })
        .then(data => {
            res.status(201).json({data, message: "Succesfully add new task!"})
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
    }

    static detail(req, res, next) {
        todo_list.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: "Oops, Not Found :("})
            } else {
                res.status(200).json({data})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })

    }

    static delete(req, res, next) {
        todo_list.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.status(200).json({data, message: "Task succesfully deleted!"})
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
    }
}

module.exports = TodoController