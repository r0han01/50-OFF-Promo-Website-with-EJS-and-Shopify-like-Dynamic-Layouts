const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');  // Import express-ejs-layouts
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set up express-ejs-layouts
app.use(expressLayouts);

// Set views folder path
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., CSS, JS, images) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the page
app.get('/', (req, res) => {
  res.render('index');  // Render the "index.ejs" view
});

// Route for the home page
app.get('/home', (req, res) => {
  res.render('home');  // Render the "home.ejs" view
});

// Route for the header page
app.get('/header', (req, res) => {
  res.render('header');  // Render the "header.ejs" view
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
