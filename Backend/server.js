import express from 'express';         // Import express
import mongoose from 'mongoose';       // Import mongoose
import router from './MVC/routes.js';  // Import your router with ES module syntax

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Use the router
app.use('/', router);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Foodies', {
    useUnifiedTopology: true,
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
