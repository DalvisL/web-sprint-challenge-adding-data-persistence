const projects = [
    {
        project_name: 'Rock Database',
        project_description: 'A database of rocks',
        project_completed: false
    },
    {
        project_name: 'Photo Gallery',
        project_description: 'a gallery of photos made with react',
        project_completed: true
    },
    {
        project_name: 'Project X',
        project_description: 'The greatest project ever conceived',
        project_completed: false
    },
]

const resources = [
    {
        resource_name: 'computer',
        resource_description: 'A device that can compute'
    },
    {
        resource_name: 'internet',
        resource_description: 'A network of computers'
    },
    {
        resource_name: 'vscode',
        resource_description: 'A text editor'
    },
    {
        resource_name: 'Gold',
        resource_description: 'A precious metal'
    },
]

const tasks = [
    {
        task_description: 'Create a database',
        task_notes: 'Use knex migrations',
        task_completed: true,
        project_id: 1
    },
    {
        task_description: 'Create tables to be used in the database',
        task_notes: 'Use knex migrations',
        task_completed: true,
        project_id: 1
    },
    {
        task_description: 'Create seed data for the tables and add pictures of rocks',
        task_notes: 'Use knex seeds',
        task_completed: false,
        project_id: 1
    },
    {
        task_description: 'Create a react app',
        task_notes: 'Use create-react-app',
        task_completed: true,
        project_id: 2
    },
    {
        task_description: 'Create a component for the gallery',
        task_notes: 'Use functional components',
        task_completed: true,
        project_id: 2
    },
    {
        task_description: 'Hook it up to a backend (optional)',
        task_notes: 'Use express',
        task_completed: true,
        project_id: 2
    },
    {
        task_description: 'Create a database',
        task_notes: 'Use knex migrations',
        task_completed: true,
        project_id: 3
    },
    {
        task_description: 'Fill it with gold AKA data',
        task_notes: 'Use knex seeds',
        task_completed: false,
        project_id: 3
    },
    {
        task_description: 'Create a react app',
        task_notes: 'Use create-react-app',
        task_completed: false,
        project_id: 3
    }
]

const project_resources = [
    {
        project_id: 1,
        resource_id: 1
    },
    {
        project_id: 1,
        resource_id: 2
    },
    {
        project_id: 1,
        resource_id: 3
    },
    {
        project_id: 2,
        resource_id: 1
    },
    {
        project_id: 2,
        resource_id: 2
    },
    {
        project_id: 2,
        resource_id: 3
    },
    {
        project_id: 3,
        resource_id: 1
    },
    {
        project_id: 3,
        resource_id: 2
    },
    {
        project_id: 3,
        resource_id: 3
    },
    {
        project_id: 3,
        resource_id: 4
    }
];


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)  
};
