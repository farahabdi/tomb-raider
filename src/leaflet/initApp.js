/* eslint-disable */
// import mapJPG from '../assets/maps.jpg';
import searchControl from './searchControl';
import tabsControl from './tabsControl';
import { firebaseAuth } from '../utils/config'
import { fetchUserVisited, updateVisited } from '../api/index'

const mapUrl = "images/maps.jpg"

export default async function initApp() {
  const map = L.map('map', {
    attributionControl: false,
    minZoom: 0,
    maxZoom: 2,
    fadeAnimation: true,
    zoomAnimation: true,
    center: [-657.1161288403573, 1570.2315412930102],
    zoom: 0.5,
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

  let visited = await fetchUserVisited()

  let imagesURLs = getMapImageURLs();
  loadImages(imagesURLs, () => {
    hideLoader();
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(mapUrl, bounds).addTo(map);

    window.map.setView([-390.0600290058237, 572.0213891349135], 0.25, {duration:0});





    setTimeout(function() {
      window.map.flyTo([-390.0600290058237, 572.0213891349135], 1.5, {duration:1});
      setTimeout(function() {


      




        setTimeout(function() {
          if (!visited) {
          const markup = showWelcomePopUp();
          const correctPopupOptions = {
            closeOnClick: false,
            maxWidth: '400',
            width: '450',
            className: 'popup__welcome',
          };
          var currentViewCenter = window.map.getCenter();
          var marker = L.marker(currentViewCenter).addTo(window.map);

            let popup = marker.bindPopup(markup, correctPopupOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", ()=> { handlePopupOpen() })
            popup.openPopup();

            updateVisited()
        }

        }, 750);      
        
        
      }, 1000);
    }, 2000);
    
  }); //loadImages
  
  // tell leaflet that the map is exactly as big as the image
  map.setMaxBounds(bounds);
}


function showWelcomePopUp() {
  const tabElement = document.getElementsByClassName('tab__container')[0];
   tabElement.setAttribute("style", "display: none" )

  const mapElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className= "leaflet-pane leaflet-overlay-pane hide-map"
  const popupElement = window.map._panes["popupPane"].className = "leaflet-pane leaflet-popup-pane unhide-map"
  
  /* Success popup */
  const markup = document.createElement('div');
  markup.className = 'popup__welcome';
  
  markup.insertAdjacentHTML('afterbegin', `<div class="message">Feel free to explore the map.</div>`);
  markup.insertAdjacentHTML('afterbegin', `<div class="header">Welcome !</div>`);

  return markup;
}

function disableMap() {
  map.dragging.disable();
  map.doubleClickZoom.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
}

function enableMap() {
  map.dragging.enable();
  map.doubleClickZoom.enable();
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.scrollWheelZoom.enable();
}

function handlePopupOpen() {
  // const marker = L.marker([-668, 1308]).addTo(window.map);
  let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]
  const tabElement = document.getElementsByClassName('leaflet-top leaflet-right')[0];
  const logoElement = document.getElementsByClassName('leaflet-bottom leaflet-left')[0];
 
  tabElement.className = 'leaflet-top leaflet-right hide-tab'
  headerElement.className = "leaflet-top leaflet-left hide-header"
  logoElement.className = "leaflet-bottom leaflet-left hide-logo"
  disableMap();
 }



function handlePopupClose(event, popup) {

  let map = window.map
  map.dragging.enable();
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.scrollWheelZoom.enable();
  const tabElement = document.getElementsByClassName('tab__container')[0];
  tabElement.setAttribute("style", "display: inherit" )

  const layerElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className = "leaflet-pane leaflet-overlay-pane"

  let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]
  const tabsElement = document.getElementsByClassName('leaflet-top leaflet-right')[0];
  const logoElement = document.getElementsByClassName('leaflet-bottom leaflet-left')[0];

  tabsElement.className = 'leaflet-top leaflet-right'
  headerElement.className = "leaflet-top leaflet-left"
  logoElement.className = "leaflet-bottom leaflet-left"
  enableMap();

}

function showLoader(){
  let loaderContainer = document.getElementById('animation_container');
  loaderContainer.style.display = 'inherit'
}

function hideLoader(){
  let loaderContainer = document.getElementById('animation_container');
  loaderContainer.style.display = 'none'
}

function loadImages(arrayOfImages, finishedLoading){
  let loadedcount = 0;
  arrayOfImages.forEach(url => {
    var preloadImg = new Image();
    preloadImg.onload = () => {
      preloadImg = null;
      // console.log("loaded "+url);
      loadedcount++;
      if(loadedcount === arrayOfImages.length){
        finishedLoading()
      }
    }
    preloadImg.src = url;              
  })
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
    array.push('/images/Code_page@3x.png')
  } else {
    //for mobile
    array.push('/images/fieldNotesm.png');
    array.push('/images/options.png');
    array.push('/images/Code_page.png')
  }
  array.push('/images/popup.png'); //these used by different things? do we need to load both?
  array.push('/images/popup@2x.png');
  return array;
}