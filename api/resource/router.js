const express = require('express');

const router = express.Router();
 
// [GET] /api/resources
// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
router.get('/', (req, res, next) => {});

// [POST] /api/resources
// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
router.get('/', (req, res, next) => {});
module.exports = router;
