function loadGPX(routeUrl, map) {
  $.ajax({
    url: routeUrl,
    dataType: "xml",
    success: function(response) {
      omnivore.gpx
          .parse(response)
          .addTo(map);
    }
  });
}

var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var mymap = L.map('mapid').setView([-37.813611,144.963056], 6);

L.tileLayer(tileUrl,
  { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
  }).addTo(mymap);

var routes = [
  'data/Tasmania-2019.gpx'
];

routes.forEach(route => {
  loadGPX(route, mymap);
});