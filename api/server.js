// build your server here and require it from index.js
const express = require('express');
const ResourcesRouter = require('./resource/router');
const TasksRouter = require('./task/router');
const ProjectsRouter = require('./project/router');
const server = express();

server.use(express.json());

server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/projects', ProjectsRouter);

server.use('*', (req, res) => {
    res.json({ 
        message: 'API is up and running!' 
    });
});

module.exports = server;
