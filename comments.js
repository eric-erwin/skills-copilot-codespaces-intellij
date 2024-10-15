// Create web server
// Create a route to get comments

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments will be here');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the server using node comments.js
// Open the browser and go to http://localhost:3000/comments
// You will see the message "Comments will be here"
