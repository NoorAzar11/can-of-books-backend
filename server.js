'use strict'

require('dotenv').config();
const axios = require('axios');
const express = require('express');
const PORT = process.env.PORT;
const server = express();
const cors = require('cors');

server.use(cors());
//http://localhost:3001/books

const schemaModel=require('./schemamodel');
const seedingBookcollection=require('./schemamodel');
const seedingUsercollection=require('./schemamodel');
const booksHandler=require('./schemamodel')

server.get('/', homeHandler);

server.get('/books',booksHandler);
function homeHandler(req, res) {
    res.send('Home Route');
}

server.listen(PORT, () => {
    console.log(`lisning on ${PORT}`);
});