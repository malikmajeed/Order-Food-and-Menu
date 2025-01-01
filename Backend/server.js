import express from 'express';         // Import express
import mongoose from 'mongoose';       // Import mongoose
import router from './MVC/routes.js';  // Import your router with ES module syntax

const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// Use the router
app.use('/', router);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Foodies', {
 
})
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
