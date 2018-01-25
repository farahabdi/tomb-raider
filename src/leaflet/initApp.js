/* eslint-disable */

import { firebaseAuth } from '../utils/config'
import mapJPG from '../assets/maps.jpg'
import searchControl from './searchControl'
import tabsControl from './tabsControl'


export default function initApp () {

    var img = [
      3840,  // original width of image
      2160   // original height of image
    ]
    var map = L.map('map', {
      attributionControl:false,
      minZoom: 0,
      maxZoom: 2,
      center: [0, 0],
      zoom: 0,
      crs: L.CRS.Simple
    });
  
    window.map = map
 

    // dimensions of the image
    var w = 3860,
        h = 2180,
        url = mapJPG;
    
    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    var northEast = map.unproject([w, 0], map.getMaxZoom()-1);

    const sw = {lat: -1400, lng: 10}
    const ne = {lat: -10, lng: 2600}

    var bounds = new L.LatLngBounds(sw, ne);
    map.on('click', function(e) {
      console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });
    
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);

    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
  }

  searchControl()
  tabsControl()
  