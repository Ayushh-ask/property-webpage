const properties = [
    {
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      location: 'Mumbai',
      description: '2 BHK sea-facing apartment.',
      price: 8500000
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      location: 'Delhi',
      description: 'Luxury villa in South Delhi.',
      price: 15000000
    },
    {
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
      location: 'Bangalore',
      description: 'Modern apartment in Whitefield.',
      price: 7200000
    },
    {
      image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
      location: 'Pune',
      description: 'Spacious flat in Hinjawadi.',
      price: 6000000
    },
    {
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9b78857?auto=format&fit=crop&w=800&q=80',
      location: 'Chennai',
      description: 'Independent house in Adyar.',
      price: 9500000
    }
  ];
  
  function displayProperties(list) {
    const listings = document.getElementById('listings');
    listings.innerHTML = '';
    list.forEach(property => {
      listings.innerHTML += `
        <div class="property-card">
          <img src="${property.image}" alt="Property Image">
          <div class="property-info">
            <h3>${property.location}</h3>
            <p>${property.description}</p>
            <p><strong>₹${property.price.toLocaleString()}</strong></p>
            <button onclick="openModal()">Contact Us</button>
          </div>
        </div>
      `;
    });
  }
  
  function filterProperties() {
    const location = document.getElementById('locationInput').value.toLowerCase();
    const maxPrice = parseFloat(document.getElementById('maxPriceInput').value);
  
    const filtered = properties.filter(p => {
      const matchLocation = p.location.toLowerCase().includes(location);
      const matchPrice = isNaN(maxPrice) || p.price <= maxPrice;
      return matchLocation && matchPrice;
    });
  
    displayProperties(filtered);
  }
  
  function openModal() {
    document.getElementById('inquiryModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('inquiryModal').style.display = 'none';
  }
  
  window.onload = () => {
    displayProperties(properties);
  };
  