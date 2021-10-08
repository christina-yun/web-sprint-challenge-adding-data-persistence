const express = require('express');
const Tasks = require('./model');

const router = express.Router();
 
// [GET] /api/tasks
router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
});
// [GET] /api/tasks/:task_id
router.get('/:task_id', (req, res, next) => {
    Tasks.getTaskById(req.params.task_id)
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

// [POST] /api/tasks
router.post('/', (req, res, next) => {
    Tasks.createTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
});

module.exports = router;
