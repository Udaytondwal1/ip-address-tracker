
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Pinch to Zoom in.<br> and Zoom Out.')

// Fetch IP Address data from Server
    function Getinfo(){
      fetch('https://geo.ipify.org/api/v2/country?apiKey=at_EJ1vedab0GLZHuyMYgT3bbjP1z1dq&ipAddress=8.8.8.8')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
     data;
    })
    .catch((error) => {
      console.error(error)
    })
  }
  
  console.log(data);
  function Setinfo(){
  
  }