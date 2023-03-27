// ------ what is this library adding?
console.log(L);

// ------ first, make a map
var map = L.map('map').setView([51.505, -0.09], 13);

// ------ attribution (must be here for the map to work)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// ------ get some coordinates (lat-lng)
var locs = [
  [-25.00296, 85.29146],
  [76.95412, 92.95343],
  [26.06845, 108.37476],
  [33.16177, 48.33547]
];


// ------ make a button for each set of coords, show on map, flyTo them
for (let loc of locs) {
  var newB = document.createElement("button");
  newB.innerText = loc;
  region.appendChild(newB);

  var marker = L.marker(loc).addTo(map);
  marker.bindPopup("Buried treasure here!");

  newB.addEventListener("click", function(e) {
    var coords = e.target.innerText.split(",");
    map.flyTo(coords);
    console.log(coords);
  });
}