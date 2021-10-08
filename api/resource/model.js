const db = require("./../../data/dbConfig");

function getResources() {
  return db("resources").select("*");
}

function getResourceById(resource_id) {
  return db("resources").select("*").where("resource_id", resource_id).first();
}

async function createResource(newResource) {
  const newId = await db("resources").insert(newResource);

  return getResourceById(newId);
}

module.exports = {
  getResources,
  getResourceById,
  createResource,
};
