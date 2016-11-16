'use strict';


// Get a connection string
const mongoDbConnectionString = 'mongodb://localhost:27017/computers';

// Get a pending connection to the database server
const mongoose = require('mongoose');
mongoose.connect(mongoDbConnectionString);

// Get notified for the connection status
const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Connection failed!\n' + err);
});

db.on('open', () => {
    console.log('Connection successfully established!');
});
