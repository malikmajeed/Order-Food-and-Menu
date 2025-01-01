import Food from './food.models.js';
import { Hotel } from './hotel.model.js';
import mongoose from 'mongoose';

const addFoodById = async (req, res) => {
    try {
      const { name, price, url, hotelName } = req.body; // Expect hotelName as a string
      
      if (!hotelName) {
        return res.status(400).send({ error: "Hotel name is required" });
      }
  
      // Trim the hotelName if it's provided
      const hotelNameTrimmed = hotelName.trim();
  
      console.log(`Searching for hotel: ${hotelNameTrimmed}`);
     
      // Find the hotel by name
      const hotel = await Hotel.findOne({ name: hotelNameTrimmed });
      
      if (!hotel) {
        return res.status(404).send({ error: "Hotel not found" });
      }
    
      // Create the food item using the hotel ObjectId
      const food = new Food({
        name,
        price,
        url,
        hotel: hotel._id // Use hotel ObjectId
      });
  
      // Save the food item
      await food.save();
  
      // Send a successful response with the food object
      res.status(201).send({ message: 'Food added successfully', food });
    } catch (error) {
      console.error(`Error occurred: ${error}`);
      res.status(500).send({ error: `Error occurred: ${error.message}` });
    }
  };
  
const getAllFoods = async (req, res) => {
  try {
    // Retrieve all foods and populate the associated hotel details
    const allFoods = await Food.find().populate('hotel', 'name');
    
    // Send a success response with the retrieved data
    res.status(200).send({ foods: allFoods });
  } catch (error) {
    // Log the error for debugging and send a meaningful response
    console.error(`Error occurred fetching all foods: ${error.message}`);
    res.status(500).send({ error: `Failed to fetch foods. Please try again later.` });
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const { foodId } = req.body; // Ensure foodId is passed in the request body
    const foodById = await Food.findByIdAndDelete(foodId); // Using correct syntax for delete
    
    if (!foodById) {
      console.log('No food found');
      return res.status(404).send('No Food found');
    }

    res.status(200).send('Food Deleted Successfully');
  } catch (error) {
    console.error('Error occurred while deleting food:', error);
    res.status(500).send({ error: 'Error occurred while deleting food' });
  }
};

const addHotelById = async (req, res) => {
  try {
    const { name, contact } = req.body;

    const newHotel = new Hotel({ name, contact });
    console.log('Hotel is ready to be saved:', newHotel);
    await newHotel.save();
    res.status(201).send({ message: 'Hotel added successfully', hotel: newHotel });
  } catch (error) {
    console.error(`Error occurred saving hotel: ${error}`);
    res.status(500).send({ error: `Error occurred saving hotel: ${error.message}` });
  }
};

const deleteHotelById = async (req, res) => {
  try {
    const { hotelId } = req.body; // Ensure hotelId is passed in the request body
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId); // Correct syntax for delete

    if (!deletedHotel) {
      console.log('No hotel found to delete');
      return res.status(404).send('No hotel found by Id');
    }

    res.status(200).send('Hotel deleted');
  } catch (error) {
    console.error('Error occurred while deleting hotel:', error);
    res.status(500).send({ error: `Error deleting hotel: ${error.message}` });
  }
};

const getAllHotels = async (req, res) => {
  try {
    // Fetch all hotels and exclude the 'location' field if necessary
    const allHotels = await Hotel.find();
    
    // Check if any hotels are found
    if (!allHotels || allHotels.length === 0) {
      return res.status(404).send({ error: 'No hotels found' });
    }

    // Send the response with the list of hotels
    res.status(200).send({ hotels: allHotels });
  } catch (error) {
    console.error('Error occurred while fetching hotels:', error.message);
    res.status(500).send({ error: 'An error occurred while fetching hotels. Please try again later.' });
  }
};

export { 
  addFoodById, 
  deleteFoodById, 
  getAllFoods, 
  addHotelById, 
  deleteHotelById, 
  getAllHotels 
}; // Export using ES module syntax
