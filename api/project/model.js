// build your `Project` model here

const db = require('../../data/dbConfig');

async function getProjects() {
    const project =  await db('projects');

    const projectWithBoolean = project.map(project => {
        return {
            ...project,
            project_completed: project.project_completed ? true : false
        };
    });

    return projectWithBoolean;
}

async function addProject(project) {
    await db('projects').insert(project);

    const newProject = await db('projects')
        .where('project_name', project.project_name)
        .first();

    const newProjectWithBoolean = {
        ...newProject,
        project_completed: newProject.project_completed ? true : false
    };

    return newProjectWithBoolean;
}

module.exports = {
    getProjects,
    addProject
};