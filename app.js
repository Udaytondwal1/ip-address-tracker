// setting map and marker ....................... 📌🗺️
var map = L.map("map").setView([updateMarker], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([updateMarker])
    .addTo(map)
    .bindPopup("Pinch to Zoom in.<br> and Zoom Out.");

// ..............................................
var updateMarker;
// Elements to Update
let ip_field = document.querySelector(".ip-field");
let location_field = document.querySelector(".location-field");
let tz_field = document.querySelector(".tz-field");
let isp_field = document.querySelector(".isp-field");

// taking inputs from this element
let ip_address = document.querySelector(".inputf").value;
let gen_ip;
let submit_btn = document.querySelector("button");

// window load event ("when page is loaded app automaticaly gets users IP Address and show details") 👇
var apiUrl =
  "https://geo.ipify.org/api/v2/country?apiKey=at_EJ1vedab0GLZHuyMYgT3bbjP1z1dq";

window.addEventListener("load", initialIPDets());
function initialIPDets() {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      ip_field.innerHTML = data.ip;
      gen_ip = data.ip;
      console.log(gen_ip);
      let { location } = data;
      location_field.innerHTML = location.region + ` ` + location.country;
      tz_field.innerHTML = `UTC ` + location.timezone;
      isp_field.innerHTML = data.isp;
      genCoords();
    })
    .catch((error) => {
      console.error(error);
    });
}

// this function provide Latitude and longitude of any IP or domain 👇
function genCoords() {
  fetch(`https://ipapi.co/${gen_ip}/json/`)
    .then(function (response) {
      response.json().then((jsonData) => {
        console.log(jsonData);
        updateMarker = ([jsonData.latitude, jsonData.longitude]);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

// this function provide info about any IP or domain when you click arrow button 👇

submit_btn.addEventListener("click", () => {
  ip_address = document.querySelector(".inputf").value;
  if (ip_address != "") {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_EJ1vedab0GLZHuyMYgT3bbjP1z1dq&domain=` +
        ip_address
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        ip_field.innerHTML = data.ip;
        let { location } = data;
        location_field.innerHTML = location.region + ` ` + location.country;
        tz_field.innerHTML = `UTC ` + location.timezone;
        isp_field.innerHTML = data.isp;
      })
      .catch((error) => {
        alert("Unable to get IP/Domain details");
        console.log(error);
      });
  } else {
    initialIPDets();
  }
});
