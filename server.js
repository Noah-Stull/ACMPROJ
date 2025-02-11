// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data from <form action="" method="POST">
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the login POST request
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // For demonstration, just log the credentials to the console
  console.log('Username:', username);
  console.log('Password:', password);

  // Typically, you would authenticate the user here:
  // 1. Check username and password in database
  // 2. Return success/fail accordingly

  // Send a simple response (in real life, you'd redirect or render a page)
  res.send('Login attempt received. Check your server console for credentials!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
