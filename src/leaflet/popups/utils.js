
/* eslint-disable */

const map = window.map


export function openPopup() {
  
}

export function handlePopupClose(event, popup) {

    let map = window.map
    //enableMap();
    const tabElement = document.getElementsByClassName('tab__container')[0];
    tabElement.setAttribute("style", "display: inherit" )
    
    const layerElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className = "leaflet-pane leaflet-overlay-pane"
    let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]
    const tabsElement = document.getElementsByClassName('leaflet-top leaflet-right')[0];
    const logoElement = document.getElementsByClassName('leaflet-bottom leaflet-left')[0]; 
   
    tabsElement.className = 'leaflet-top leaflet-right'
    headerElement.className = "leaflet-top leaflet-left"
    logoElement.className = "leaflet-bottom leaflet-left"
  }
  
  export function handlePopupOpen() {
   // const marker = L.marker([-668, 1308]).addTo(window.map);
   let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]
   const tabElement = document.getElementsByClassName('leaflet-top leaflet-right')[0];
   const logoElement = document.getElementsByClassName('leaflet-bottom leaflet-left')[0];
  
   const closeButton = document.getElementsByClassName('leaflet-popup-close-button');
  
    closeButton[0].innerHTML = ''
   tabElement.className = 'leaflet-top leaflet-right hide-tab'
   headerElement.className = "leaflet-top leaflet-left hide-header"
   logoElement.className = "leaflet-bottom leaflet-left hide-logo"
   //disableMap();
      
  }

  export function disableMap() {
    map.dragging.disable();
    map.doubleClickZoom.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
  }
  
  export function enableMap() {
    map.dragging.enable();
    map.doubleClickZoom.enable();
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
  }
  