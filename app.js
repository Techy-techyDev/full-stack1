// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session")
const bcrypt = require("bcrypt");
const multer = require("multer");

// Initialize Express app
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mock user database (replace this with a real database in production)
let users = [];

// Routes
// Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));
  
  // Routes
  app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
  });
  
  // Sign-up route
  app.get('/signup', (req, res) => {
    res.send('Sign up page');
  });
  
  app.post('/signup', (req, res) => {
    // Handle sign-up form submission
    const { username, email, password } = req.body;
    // Add your sign-up logic here (e.g., create a new user in the database)
    res.send('Sign up successful');
  });
  
  // Sign-in route
  app.get('/signin', (req, res) => {
    res.send('Sign in page');
  });
  
  app.post('/signin', (req, res) => {
    // Handle sign-in form submission
    const { email, password } = req.body;
    // Add your sign-in logic here (e.g., validate credentials)
    res.send('Sign in successful');
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
