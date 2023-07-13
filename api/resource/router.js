// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', (req, res) => {
    Resource.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error retrieving resources',
                err: err.message
            });
        });
});

router.post('/', (req, res) => {
    Resource.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error adding resource',
                err: err.message
            });
        });
});



module.exports = router;