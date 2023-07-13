// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResources() {
    const resource = await db('resources');

    return resource;
}

async function addResource(resource) {
    await db('resources').insert(resource);

    const newResource = await db('resources')
        .where('resource_name', resource.resource_name)
        .first();

    return newResource;
}

module.exports = {
    getResources,
    addResource
};