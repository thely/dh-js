// ------ Leaflet time: the essentials, from their tutorial
// ------ https://leafletjs.com/examples/quick-start/

// ------ what is this library adding?

// ------ first, make a map

// ------ attribution (must be here for the map to work)
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// ------ make some locations for us to fly to
var locs = [
  [-25.00296, 85.29146],
  [76.95412, 92.95343],
  [26.06845, 108.37476],
  [33.16177, 48.33547]
];

// ------ make a button for each set of coords, show on map, flyTo them