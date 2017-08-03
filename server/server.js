const express = require('express');
const path = require('path');
const dist = path.join(__dirname, '../dist');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.sendFile(dist+ '/index.html');
});

app.listen(port);
console.log("server listening on port " + port);
