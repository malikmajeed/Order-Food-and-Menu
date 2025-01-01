const axios =require('axios');


axios.get('http://localhost:3000/foods')
.then(response => {
    console.log('Fetched data using Axios:', response.data); 
})
.catch(error => {
    console.error('Error with Axios GET request:', error);
  });



  

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log('Fetched data using Axios:', response.data);  // Log the fetched data
//   })
//   .catch(error => {
//     console.error('Error with Axios GET request:', error);
//   });