/* eslint-disable */
// import mapJPG from '../assets/maps.jpg';
import searchControl from './searchControl';
import tabsControl from './tabsControl';

export default function initApp() {
  const map = L.map('map', {
    attributionControl: false,
    minZoom: 0,
    maxZoom: 2,
    center: [0, 0],
    zoom: 0,
    crs: L.CRS.Simple,
  });

  window.map = map;

  // dimensions of the image
  // const url = mapJPG;
  const url = "images/maps.jpg"

  const southWest = { lat: -1400, lng: 10 };
  const northEast = { lat: -10, lng: 2600 };

  const bounds = new L.LatLngBounds(southWest, northEast);
  map.on('click', (e) => {
    console.log(`Lat, Lon : ${e.latlng.lat}, ${e.latlng.lng}`);
  });

  var preloadImg = new Image();
  preloadImg.onload = () => {
    let loaderEl = document.getElementById('animation_container');
    if (loaderEl && loaderEl.parentNode) {
      loaderEl.parentNode.removeChild(loaderEl);
    }
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);
  }
  preloadImg.src = url;
  searchControl();
  tabsControl();
  
  // add the image overlay,
  // so that it covers the entire map
  // L.imageOverlay(url, bounds).addTo(map);
  // searchControl();
  // tabsControl();

  // tell leaflet that the map is exactly as big as the image
  map.setMaxBounds(bounds);
}

