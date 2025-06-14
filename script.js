// server.js
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const taskRoutes = require('./routes/tasks');
const { tasks, categories } = require('./data');

const app = express();

// Middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/tasks', auth, taskRoutes); // Apply auth middleware to API routes

// Render view
app.get('/', (req, res) => {
  res.render('index', { tasks, categories });
});

// Error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


