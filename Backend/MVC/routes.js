import express from 'express';  // Import express
import { addFoodById, deleteFoodById, getAllFoods, addHotelById, deleteHotelById, getAllHotels } from './controllers.js';  // Import functions using ES module syntax

const router = express.Router();

// Hotel Routes
router.post('/add-hotel', addHotelById);
router.get('/hotels', getAllHotels);
router.delete('/delete-hotel', deleteHotelById);

// Food Routes
router.post('/add-food', addFoodById);
router.get('/foods', getAllFoods);
router.delete('/delete-food', deleteFoodById);

export default router;  // Use ES module export syntax
