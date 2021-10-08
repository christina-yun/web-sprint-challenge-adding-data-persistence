const express = require("express");
const Resources = require("./model");

const router = express.Router();

// [GET] /api/resources
router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

//[GET] /api/resources/:resource_id
router.get("/:resource_id", (req, res, next) => {
  Resources.getResourceById(req.params.resource_id)
    .then((resource) => {
      res.json(resource);
    })
    .catch(next);
});

// [POST] /api/resources
router.post("/", (req, res, next) => {
  Resources.createResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});
module.exports = router;
