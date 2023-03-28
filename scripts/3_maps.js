// ------ Leaflet time: the essentials, from their tutorial
// ------ https://leafletjs.com/examples/quick-start/

// ------ what is this library adding?
// console.log(L);

// ------ first, make a map
var map = L.map('map').setView([51.505, -0.09], 13);
// var map = L.map('map').setView([51.505, -0.09], 13);

// ------ attribution (must be here for the map to work)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// ------ make some locations for us to fly to
var locs = [
  [-25.00296, 85.29146],
  [76.95412, 92.95343],
  [26.06845, 108.37476],
  [33.16177, 48.33547]
];

// ------ make a button for each set of coords, show on map, flyTo them
// map.flyTo(locs[2]);

for (var loc of locs) {
  var btn = document.createElement("button");
  btn.innerText = loc;
  contain.appendChild(btn);

  // new: add a map marker, and add some popup text
  // when you click on it
  var marker = L.marker(loc).addTo(map);
  marker.bindPopup("Buried treasure here!");

  btn.addEventListener("click", function(e) {
    var coords = e.target.innerText;
    console.log(coords);
    coords = coords.split(",");
    console.log(coords);
    map.flyTo(coords);
  });
}