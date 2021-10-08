const express = require('express');
const Projects = require('./model');

const router = express.Router();

//[GET] /api/projects
router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => res.json(projects))
        .catch(next)
});

//[GET] /api/projects/:project_id
router.get('/:project_id', (req, res, next) => {
    Projects.getProjectById(req.params.project_id)
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

// [POST] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
router.post('/', (req, res, next) => {
    Projects.createProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(next)
});


module.exports = router;
