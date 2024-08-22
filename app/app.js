const express = require('express');
const app = express();
const router = require('../routes/userRoutes');

app.use(express.json());

// This defines the base route - http://localhost/api/v1/users/
app.use('/api/v1/users', router); // Linked to routes/userRoutes.js

module.exports = app;