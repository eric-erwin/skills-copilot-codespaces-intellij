//create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { json } = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comment.html'));
});
app.post('/comment', (req, res) => {
    const { name, comment } = req.body;
    fs.readFile('comment.json', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let commentList = JSON.parse(data);
        commentList.push({ name, comment });
        fs.writeFile('comment.json', JSON.stringify(commentList), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            res.sendFile(path.join(__dirname, 'public', 'comment.html'));
        });
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
