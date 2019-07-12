const express = require('express');
const helmet = require('helmet');

const Actions = require('./data/helpers/actionModel');
const Projects = require('./data/helpers/projectModel');

const server = express();

server.use(helmet());
server.use(express.json());

server.post('/actions', async (req, res) => {
  try {
    const action = await Actions.insert(req.body);
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding action'
    });
  }
});

server.get('/actions', async (req, res) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving actions'
    });
  }
});

server.put('/actions/:id', async (req, res) => {
  try {
    const action = await Actions.update(req.params.id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: 'The action could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  }
});

server.delete('/actions/:id', async (req, res) => {
  try {
    const count = await Actions.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The action has been destroyed' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Action is indestructible'
    });
  }
});

server.post('/projects', async (req, res) => {
  try {
    const project = await Projects.insert();
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding project'
    });
  }
});

server.get('/projects', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving actions'
    });
  }
});

module.exports = server;