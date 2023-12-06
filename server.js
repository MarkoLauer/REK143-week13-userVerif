const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRouter = require('./routes/user.routes');
const app = express();


app.use(bodyParser.json());

db.connect((error) => {
    if(error) {
        console.log('connection failed.');
        console.log(error);
    } else {
        console.log('Connection initiated.');
    } 
});


app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});