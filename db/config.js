require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.URL)
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
})
.catch((err) => {
    console.log('Unable to connect to MongoDB Atlas');
    console.error(err);
})
