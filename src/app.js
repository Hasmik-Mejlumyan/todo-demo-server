const express = require('express');
const cors = require('cors');

const { apiV1 } = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', apiV1);

module.exports = app;
