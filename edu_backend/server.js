require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

const PORT = process.env.PORT || 3500;

// Connect to mongoDB
connectDB();

// Handle options credentials check - before CORS
// and fetch cookies credentials requirement
app.use(credentials)

// cross origin resource sharing Third-party

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false}));

// built-in middleware for json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World")
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
});