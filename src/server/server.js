const express = require('express');

const app = express();
app.use

const users = ['nick'];
app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000, (res)=> console.log("The server is running"));

