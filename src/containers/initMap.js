/* eslint-disable */

import { firebaseAuth } from '../utils/config'
import './searchBox'
import mapJPG from '../assets/maps.jpg'
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
        url = mapJPG;
    
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
      this.challengeWrapper1  = L.DomUtil.create('img', 'challenge__1', this.challengeWrapper  );
      this.challengeWrapper2  = L.DomUtil.create('img', 'challenge__2', this.challengeWrapper  );
      this.challengeWrapper3  = L.DomUtil.create('img', 'challenge__3', this.challengeWrapper  );
      this.challengeWrapper4  = L.DomUtil.create('img', 'challenge__4', this.challengeWrapper  );
      this.challengeWrapper5  = L.DomUtil.create('img', 'challenge__5', this.challengeWrapper  );


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


    //Field Notes Control
    L.Control.field= L.Control.extend({
      options: {
        // topright, topleft, bottomleft, bottomright
        position: 'topright',
        placeholder: 'Field notes tab...'
      },
      initialize: function (options /*{ data: {...}  }*/) {
        // constructor
        L.Util.setOptions(this, options);
      },
      onAdd: function (map) {

        let tabContainer = L.DomUtil.create('div', 'tab__container');
        this.field = L.DomUtil.create('div', 'field', tabContainer);

        /* Options tab */
        this.optionsElement = L.DomUtil.create('div', 'options', tabContainer);
        this.optionsContainerElement= L.DomUtil.create('div', 'options__container options__container_closed', this.optionsElement );

        /* Text in options Tab */
        this.optionsText = L.DomUtil.create('div', 'options__wrapper', this.optionsContainerElement);
        this.optionsText.insertAdjacentHTML('afterbegin', `
          <div class="instructions">
            <div class="cross__wrapper">
              <div class="cross"> </div>
            </div>
            
            <div class="instructions__header"> 
              <div> Options </div>
            </div>
            <div class="instructions__signout">
              <div> Sign out </div>
              <div class="tick"></div>
            </div>
            <div class="instructions__terms">
              <div class="tick"></div>
              <div> Terms and conditions </div>
            </div>
          </div>
        ` )  

        // TODO put this facebook stuff in the OTHER folder, not the options folder     
        const fbBox = L.DomUtil.create('div', 'fb_post_container', this.field );

        fbBox.addEventListener("click", showfield, false); //work around for iOS need to capture click
        this.optionsElement.addEventListener("click", showOptionsTab, false); //work around for iOS need to capture click
   

        this.fieldWrapper = L.DomUtil.create('div', 'field__wrapper field__wrapper-closed', this.field );
        this.fieldWrapper.addEventListener("click", showOptionsTab, false); //work around for iOS need to capture click
        this.fieldWrapper.setAttribute("tabindex", "1")



        self = this;

        function showfield(event){
          //toggle the css class name manually to open or close the tab
          if(self.fieldWrapper.className === 'field__wrapper field__wrapper-open'){
            self.fieldWrapper.className = 'field__wrapper field__wrapper-close'
            fbBox.className = 'fb_post_container fb_post_container__closed'
            map.scrollWheelZoom.enable();
            map.dragging.enable();
          } else {
            self.fieldWrapper.className = 'field__wrapper field__wrapper-open'
            fbBox.className = 'fb_post_container fb_post_container__opened onTop'
            map.scrollWheelZoom.disable();
            map.dragging.disable();
          }
      }

        function showOptionsTab(event){

          if(self.optionsElement.className === 'options__container options__container-open'){
              self.optionsElement.className = 'options__container options__container_close'
              self.optionsElement.className = "options leaflet-control"
         } else if (self.optionsElement.className == "options leaflet-control onTop") {
              self.optionsElement.className = 'options leaflet-control'
         } else {
              self.optionsElement.className = 'options__container options__container-open'
              self.optionsElement.className = "options leaflet-control onTop"
         }
       }
 
        fbBox.id ='fb-posts-here';
        L.DomEvent.disableClickPropagation(fbBox);
        L.DomEvent.on(fbBox, 'mouseover', function(){
            map.scrollWheelZoom.disable();
        });
        L.DomEvent.on(fbBox, 'mouseout', function(){
            map.scrollWheelZoom.enable();
        });

        let posts = fetchFacebookPosts().then((posts)=> {
          // console.warn(posts);
          posts.forEach(post => {
            fbBox.innerHTML += '<div class="fb-post" data-href="' + post + '" data-width="350"></div>';
            console.warn(post)
          })
          //tell FB to render this
          const element = document.getElementById('fb-posts-here')
          FB.XFBML.parse(element); //this is the important magic call that makes facebook render all the posts out!
        })

        return tabContainer;
      },


    });
    // End Field Notes control

    L.control.search = function(id, options) {
      return new L.Control.Search(id, options);
    }

    L.control.field = function(id, options) {
      return new L.Control.field(id, options);
    }

    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
  }
  