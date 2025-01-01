let axios =require('axios');

let foods = [];
let Hotels = [];

/// Fetching all the foods 
axios.get('http://localhost:3000/foods')
.then(response => {

   foods = response.data;
    console.log('Fetched Foods using Axios:', foods); 

})
.catch(error => {
    console.error('Error with Axios Foods GET request:', error);
  });


  
// // Fetching all the hotels 
axios.get('http://localhost:3000/hotels')
.then(response => {

     Hotels = response.data;

     createHotelSection(Hotels);

    console.log('Fetched Hotels using Axios:', Hotels); 

})
.catch(error => {
    console.error('Error with Axios Hotels GET request:', error);
  });



 
// Function to create the hotel section
function createHotelSection(Hotels) {
  const newSection = document.getElementById('hotels');
  newSection.innerHTML = ''; // Clear previous content
  Hotels.forEach(hotel => {
    const hotelDiv = document.createElement('div');
    hotelDiv.classList.add('bg-red-500', 'p-6', 'rounded-lg', 'shadow-lg');
    hotelDiv.innerHTML = `
      <h3 class="text-xl font-bold mb-4 text-white">${hotel.name}</h3>
      <p>${hotel.contact}</p>
      <ul class="space-y-2 text-white">
        <!-- Menu items will be populated here -->
      </ul>
    `;
    newSection.appendChild(hotelDiv);
  });
}





// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log('Fetched data using Axios:', response.data);  // Log the fetched data
//   })
//   .catch(error => {
//     console.error('Error with Axios GET request:', error);
//   });