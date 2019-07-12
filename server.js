const express = require('express');
const helmet = require('helmet');

const Actions = require('./data/helpers/actionModel');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
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

module.exports = server;