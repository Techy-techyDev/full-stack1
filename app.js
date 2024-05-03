// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

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

// Signup route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Check if user already exists
    if (users.some(user => user.username === username)) {
        return res.status(400).send('User already exists');
    }
    // Create new user
    const newUser = { username, password };
    users.push(newUser);
    res.redirect('/'); // Redirect to home page
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid username or password');
    }
    res.redirect('/'); // Redirect to home page
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
