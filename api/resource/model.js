const db = require('./../../data/dbConfig');

function getResources(){
    return db('resources').select('*')
};

function createResource(newResource){};

module.exports = {
    getResources,
    createResource
}
