/* eslint-disable */

import { firebaseAuth } from '../utils/config'
import './searchBox'
// import mapJPG from '../assets/maps.jpg'
import { fetchFacebookPosts } from '../api/index'

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
        url = "images/maps.jpg"
        // url = mapJPG;

    
    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    var northEast = map.unproject([w, 0], map.getMaxZoom()-1);

    const sw = {lat: -1400, lng: 10}
    const ne = {lat: -10, lng: 2600}

    /* L.popup()
    .setLatLng([-567.8762371950518, 957.0612003092365])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map); */




    var bounds = new L.LatLngBounds(sw, ne);
    map.on('click', function(e) {
      console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
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
      L.control.search().addTo(map)
      L.control.field().addTo(map)
    }

    preloadImg.src = mapJPG;
    
    // Search Control
    L.Control.Search = L.Control.extend({
      options: {
        // topright, topleft, bottomleft, bottomright
        position: 'topleft',
        placeholder: 'Search...'
      },
      initialize: function (options /*{ data: {...}  }*/) {
        // constructor
        L.Util.setOptions(this, options);
      },
      onAdd: function (map) {
        // happens after added to map
      var container = L.DomUtil.create('div', 'header');
      this.headerContainer = L.DomUtil.create('div', 'header__container', container);

      /* Header */  
      this.headerWrapper  = L.DomUtil.create('div', 'header__wrapper', this.headerContainer);
      this.searchInputContainer = L.DomUtil.create('div', 'search__container', this.headerWrapper);
      this.searchWrapper = L.DomUtil.create('div', 'search__wrapper', this.searchInputContainer);
      this.searchInput = L.DomUtil.create('input', 'search__input', this.searchWrapper);
      this.searchInput.setAttribute("autocomplete", "off")
      this.searchInput.setAttribute("spellcheck", "false")
      this.searchInput.setAttribute("autocorrect", "false")
      this.searchInput.setAttribute("placeholder", "Enter the landmark.")
      this.searchIcon = L.DomUtil.create('div', 'search__icon', this.searchWrapper);
      this.headerWrapper.addEventListener("click", focusSearch, false); //see focusSearch() function
      this.container= L.DomUtil.create('div', 'container', this.headerWrapper);
      this.profile= L.DomUtil.create('div', 'profile', this.container);
      this.profileContainer= L.DomUtil.create('div', 'profile__container', this.profile);
      this.challenges= L.DomUtil.create('div', 'challenges', this.container);

      /* Profile */
      this.profilePicture= L.DomUtil.create('img', 'profile__picture',this.profileContainer);
      this.profilePicture.addEventListener("touchstart", logout, false);
      this.profilePicture.addEventListener("click", logout, false);

      /* Challenge container */
      this.challengeWrapper   = L.DomUtil.create('div', 'challenge__wrapper', this.challenges );
      this.challengeWrapper1  = L.DomUtil.create('img', 'challenge__icon challenge__1', this.challengeWrapper  );
      this.challengeWrapper2  = L.DomUtil.create('img', 'challenge__icon challenge__2', this.challengeWrapper  );
      this.challengeWrapper3  = L.DomUtil.create('img', 'challenge__icon challenge__3', this.challengeWrapper  );
      this.challengeWrapper4  = L.DomUtil.create('img', 'challenge__icon challenge__4', this.challengeWrapper  );
      this.challengeWrapper5  = L.DomUtil.create('img', 'challenge__icon challenge__5', this.challengeWrapper  );


      function logout(event) {
        firebaseAuth.signOut()
        window.location.reload(true);
      }

      function focusSearch(event) {
        //bed - 19 Jan 2018 - have to manually tell this to focus for iOS. 
        //I suspect this is due to iOS prevention of focus() events outside of the user manually doing it, and outside of an originating 'click' event - security reasons
        //I think leaflet may be propogating touch events up? maybe. ¯\_(ツ)_/¯ This seems to work though as we start from a click event
        event.target.focus()
      }

        /* Image */
      this.profilePicture.src = window.photoURL
      this.profilePicture.touchstart = () => {
        firebaseAuth.signOut()
        window.location.reload(true);
      }
      this.profilePicture.onclick = () => {
        firebaseAuth.signOut()
        window.location.reload(true);
      }

        return container;
      }
    });
    // End Search control


    

    L.control.search = function(id, options) {
      return new L.Control.Search(id, options);
    }



    // L.control.search().addTo(map)
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
  }
  