// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    const task = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        );

    const taskWithBoolean = task.map(task => {
        return {
            ...task,
            task_completed: task.task_completed ? true : false
        };
    });

    return taskWithBoolean;
}

async function addTask(task) {
    await db('tasks').insert(task);

    const newTask = await db('tasks')
        .where('task_description', task.task_description)
        .first();

    const newTaskWithBoolean = {
        ...newTask,
        task_completed: newTask.task_completed ? true : false
    };

    return newTaskWithBoolean;
}

module.exports = {
    getTasks,
    addTask
};
