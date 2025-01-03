document.addEventListener('DOMContentLoaded', function () {
    const menus = {
      'Musharaf Cafe': {
        'Monday': [
          { name: 'Chicken Biryani', price: 'Rs. 150' },
          { name: 'Beef Kebab', price: 'Rs. 100' },
          { name: 'Vegetable Pulao', price: 'Rs. 120' },
          { name: 'Chicken Karahi', price: 'Rs. 200' },
          { name: 'Chapati', price: 'Rs. 10' }
        ],
        'Tuesday': [
          { name: 'Mutton Biryani', price: 'Rs. 200' },
          { name: 'Fish Fry', price: 'Rs. 150' },
          { name: 'Aloo Gobi', price: 'Rs. 100' },
          { name: 'Chicken Curry', price: 'Rs. 180' },
          { name: 'Naan', price: 'Rs. 15' }
        ],
      },
      'Green Chilli': {
        'Monday': [
          { name: 'Paneer Tikka', price: 'Rs. 180' },
          { name: 'Chicken Shawarma', price: 'Rs. 120' },
          { name: 'Beef Biryani', price: 'Rs. 150' },
          { name: 'Dal Makhani', price: 'Rs. 100' },
          { name: 'Garlic Naan', price: 'Rs. 20' }
        ],
        'Tuesday': [
          { name: 'Paneer Butter Masala', price: 'Rs. 200' },
          { name: 'Chicken Tandoori', price: 'Rs. 150' },
          { name: 'Beef Korma', price: 'Rs. 180' },
          { name: 'Chana Masala', price: 'Rs. 90' },
          { name: 'Butter Naan', price: 'Rs. 25' }
        ],
      },
    };
  
    function updateMenu(hotel, day) {
      const menuList = document.querySelector(`#${hotel.toLowerCase().replace(/ /g, '-')}-menu`);
      menuList.innerHTML = '';
      menus[hotel][day].forEach(item => {
        const li = document.createElement('li');
        li.className = 'flex justify-between';
        li.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
        menuList.appendChild(li);
      });
    }
  
    document.querySelectorAll('select').forEach(select => {
      select.addEventListener('change', function () {
        const hotel = this.getAttribute('data-hotel');
        const day = this.value;
        updateMenu(hotel, day);
      });
    });
  
    // Initialize menus
    document.querySelectorAll('select').forEach(select => {
      const hotel = select.getAttribute('data-hotel');
      const day = select.value;
      updateMenu(hotel, day);
    });
  });
  


 
  
  
  
