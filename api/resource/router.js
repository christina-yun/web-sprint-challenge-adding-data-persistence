const express = require('express');
const Resources = require('./model');

const router = express.Router();
 
// [GET] /api/resources
router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
});

// [POST] /api/resources
// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
router.get('/', (req, res, next) => {});
module.exports = router;
