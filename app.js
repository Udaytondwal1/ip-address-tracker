// Elements to Update
let ip_field = document.querySelector(".ip-field");
let location_field = document.querySelector(".location-field");
let tz_field = document.querySelector(".tz-field");
let isp_field = document.querySelector(".isp-field");

// taking inputs from this element
let ip_address = document.querySelector(".inputf").value;
let gen_ip;
let submit_btn = document.querySelector("button");

var apiUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_iyZxRROuQlXSRuadNhDrJSS4btznp";

function MapSetter(locationlat, locationlng) {
  var map = L.map("map2").setView([locationlat, locationlng], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([locationlat, locationlng])
    .addTo(map)
    .bindPopup("Pinch to Zoom in.<br> and Zoom Out.");
}

function MapSetter2(locationlat, locationlng) {
  var map = L.map("map").setView([locationlat, locationlng], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([locationlat, locationlng])
    .addTo(map)
    .bindPopup("Pinch to Zoom in.<br> and Zoom Out.");
}

async function IPdataSetter() {
  const res = await fetch(apiUrl);
  var result = await res.json();
  console.log(result);

  ip_field.innerHTML = result.ip;
  gen_ip = result.ip;
  console.log(gen_ip);
  var { location } = result;
  location_field.innerHTML = location.region + ` ` + location.country;
  tz_field.innerHTML = `UTC ` + location.timezone;
  isp_field.innerHTML = result.isp;
  MapSetter(location.lat, location.lng);
}

window.addEventListener("load", () => {
  IPdataSetter();
});

// this function provide info about any IP or domain when you type and click arrow button 👇

submit_btn.addEventListener("click", () => {
  ip_address = document.querySelector(".inputf").value;

  if (ip_address != "") {
    document.getElementById("map2").style.height = "0%";
    document.getElementById("map").style.height = "100%";
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_iyZxRROuQlXSRuadNhDrJSS4btznp&domain=` +
        ip_address
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        ip_field.innerHTML = data.ip;
        let { location } = data;
        location_field.innerHTML = location.region + ` ` + location.country;
        tz_field.innerHTML = `UTC ` + location.timezone;
        isp_field.innerHTML = data.isp;
        MapSetter2(location.lat, location.lng);
      })
      .catch((error) => {
        alert("Unable to get IP/Domain details");
        console.log(error);
      });
  } else {
    IPdataSetter();
    document.getElementById("map2").style.height = "100%";
    document.getElementById("map").style.height = "0%";
  }
});
