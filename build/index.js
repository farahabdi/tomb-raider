/*
 * @copyright 2015 commenthol
 * @license MIT
 */
/* globals L */

function init () {
  var img = [
    3840,  // original width of image
    2160   // original height of image
  ]
  var map = L.map('map', {
    minZoom: 0,
    maxZoom: 3,
    center: [0, 0],
    zoom: 1,
    crs: L.CRS.Simple
  });
  
  // dimensions of the image
  var w = 3840,
      h = 2160,
      url = './map.jpg';
  
  // calculate the edges of the image, in coordinate space
  var southWest = map.unproject([0, h], map.getMaxZoom()-1);
  var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
  var bounds = new L.LatLngBounds(southWest, northEast);
  
  // add the image overlay, 
  // so that it covers the entire map
  L.imageOverlay(url, bounds).addTo(map);
  
  // tell leaflet that the map is exactly as big as the image
  map.setMaxBounds(bounds);
}
