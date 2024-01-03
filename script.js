// var map = L.map("map").setView([, ], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("Pinch to Zoom in.<br> and Zoom Out.");

document.querySelector("button").addEventListener("click", function () {
  let ipaddress = "google.com"//document.querySelector(".inputf").value;
  
  if (ipaddress != 0) {
    console.log("if run hua h")

    if(ipaddress == String){
      console.log("ye string h")
    }else{
    fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_EJ1vedab0GLZHuyMYgT3bbjP1z1dq&domain=`${ipaddress}`"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        document.querySelector(".ipf").innerHTML = data.ip;
        let { location } = data;
        document.querySelector(".locationf").innerHTML = location.region;
        document.querySelector(".tzf").innerHTML = location.timezone;
        document.querySelector(".ispf").innerHTML = data.isp;
      })
      .catch((error) => {
        console.error(error);
      });
    }

  } else {
    fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_EJ1vedab0GLZHuyMYgT3bbjP1z1dq"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        document.querySelector(".ipf").innerHTML = data.ip;
        let { location } = data;
        document.querySelector(".locationf").innerHTML = location.region;
        document.querySelector(".tzf").innerHTML = location.timezone;
        document.querySelector(".ispf").innerHTML = data.isp;
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
