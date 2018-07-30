mapboxgl.accessToken = 'pk.eyJ1IjoidmliaW9oIiwiYSI6ImNqMzFmbTFoOTAwMWMycW82YXppbGRidXAifQ.bb6xyGsr1kQW3UozHS2Pmw';

var coordinates = [2.956476579635819, 48.86757827445496];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: coordinates,
    zoom: 11,
    scrollZoom: false
});

map.addControl(new mapboxgl.NavigationControl({
  showCompass: false
}), 'top-right');
new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
