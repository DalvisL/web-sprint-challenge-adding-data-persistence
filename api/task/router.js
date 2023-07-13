// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

router.get('/', (req, res) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error retrieving tasks',
                err: err.message
            });
        });
});

router.post('/', (req, res) => {
    Task.addTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error adding task',
                err: err.message
            });
        });
});


module.exports = router;