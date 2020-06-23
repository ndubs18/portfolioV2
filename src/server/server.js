const express = require('express');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 'Rhinolax18!';

const genSalt = bcrypt.genSalt(saltRounds, (error, salt)=> {

        console.log(`salt: ${salt}`);
        bcrypt.hash(myPlaintextPassword, saltRounds, (error, hash) => {
            if(error)
                console.log("The hash could not be created");
            else {
                console.log(`Hash: ${hash}`);
            }
        })
})

const app = express();
app.use

const users = ['nick'];

//users request 
app.get('/users', (req, res) => {
    res.json(users)
})



app.listen(3000, (res)=> console.log("The server is running"));

