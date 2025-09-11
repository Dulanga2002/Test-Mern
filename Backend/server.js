const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dulanganikeshala:Dnb2002$@cluster0.h5dxmy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async() => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connect();

const server = app.listen(3001,'127.0.0.1', () => {
    console.log(`Node server is listening to ${server.address().port}`);
});

app.use('/api', router);