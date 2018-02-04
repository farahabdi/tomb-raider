/* eslint-disable */
// import mapJPG from '../assets/maps.jpg';
import searchControl from './searchControl';
import tabsControl from './tabsControl';

const mapUrl = "images/maps.jpg"

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
  const southWest = { lat: -1400, lng: 10 };
  const northEast = { lat: -10, lng: 2600 };

  const bounds = new L.LatLngBounds(southWest, northEast);
  map.on('click', (e) => {
    console.log(`Lat, Lon : ${e.latlng.lat}, ${e.latlng.lng}`);
  });
  searchControl();
  tabsControl();

  let imagesURLs = getMapImageURLs();
  loadImages(imagesURLs, () => {
    hideLoader();
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(mapUrl, bounds).addTo(map);
  });
  
  // tell leaflet that the map is exactly as big as the image
  map.setMaxBounds(bounds);
}

function getMapImageURLs(){
  //get the images urls for the various bits - as determined by the media queries 
  const mobile = 320;
  const tablet = 740;
  const desktop = 980;
  const wide = 1300;

  let array = [mapUrl];
  if(window.matchMedia( "(min-width: "+tablet+"px)" ).matches){
    //for tablet and larger
    array.push('/images/fieldFolder@2x.png');
    array.push('/images/options@desktop.png');
  } else {
    //for mobile
    array.push('/images/fieldNotesm.png');
    array.push('/images/options.png');
  }
  array.push('/images/popup.png'); //these used by different things? do we need to load both?
  array.push('/images/popup@2x.png');
  return array;
}