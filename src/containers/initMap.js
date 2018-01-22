/* eslint-disable */

import { firebaseAuth } from '../utils/config'
import './searchBox'


export default function initApp () {
  function init() {
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
        url = 'https://i.imgur.com/zXtbZ1H.jpgca';
    
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
    
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);

    let items = []
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
      this.challenges= L.DomUtil.create('div', 'challenges', this.container);

      /* Profile */
      this.profilePicture= L.DomUtil.create('img', 'profile__picture',this.profile);
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
        event.srcElement.focus()
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
    L.Control.fieldNotes= L.Control.extend({
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
        // happens after added to map
         /* Blue Options fb_post_container */

         var tabContainer = L.DomUtil.create('div', 'tab__container');

         this.fieldNotesContainer = L.DomUtil.create('div', 'fieldNotes__container', tabContainer);

        /* Options tab */
        this.optionsContainer = L.DomUtil.create('div', 'options__container', tabContainer);
        this.optionsWrapper = L.DomUtil.create('div', 'options__wrapper options__wrapper_closed', this.optionsContainer );


                 // TODO put this facebook stuff in the OTHER folder, not the options folder     
        const fbBox = L.DomUtil.create('div', 'fb_post_container', this.fieldNotesContainer );

         fbBox.addEventListener("click", showfieldNotes, false); //work around for iOS need to capture click
         this.optionsContainer.addEventListener("click", showOptionsTab, false); //work around for iOS need to capture click
   

         this.fieldNotesWrapper = L.DomUtil.create('div', 'fieldNotes__wrapper fieldNotes__wrapper_closed', this.fieldNotesContainer );
         this.fieldNotesWrapper.addEventListener("click", showOptionsTab, false); //work around for iOS need to capture click
         this.fieldNotesWrapper.setAttribute("tabindex", "1")
         self = this;

         function showfieldNotes(event){
           //toggle the css class name manually to open or close the tab
           if(self.fieldNotesWrapper.className === 'fieldNotes__wrapper fieldNotes__wrapper_opened'){
              self.fieldNotesWrapper.className = 'fieldNotes__wrapper fieldNotes__wrapper_closed'
              fbBox.className = 'fb_post_container fb_post_container__closed'
              

           } else {
              self.fieldNotesWrapper.className = 'fieldNotes__wrapper fieldNotes__wrapper_opened'
              fbBox.className = 'fb_post_container fb_post_container__opened onTop'
           }
        }

        function showOptionsTab(event){

          if(self.optionsContainer.className === 'options__wrapper options__wrapper_opened'){
              self.optionsContainer.className = 'options__wrapper options__wrapper_closed'
              self.optionsContainer.className = "options__container leaflet-control"
         } else if (self.optionsContainer.className == "options__container leaflet-control onTop") {
              self.optionsContainer.className = 'options__container leaflet-control'
         } else {
              self.optionsContainer.className = 'options__wrapper options__wrapper_opened'
              self.optionsContainer.className = "options__container leaflet-control onTop"
         }

            debugger
       }

        
       // this.fieldNotesWrapper.addEventListener("click", showFB, false); //work around for iOS need to capture click
       // fieldNotesContainer.addEventListener("click", showFB, false); //work around for iOS need to capture click
        function showFB(event){
          alert('ddd')
       }

 


        fbBox.id ='fb-posts-here';
        // placeholder FB posts - TODO read these from firebase
        fbBox.innerHTML = '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350" mobile="true"></div>';
        fbBox.innerHTML += '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350"></div>';
        fbBox.innerHTML += '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350"></div>';
        fbBox.innerHTML += '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350"></div>';
        L.DomEvent.disableClickPropagation(fbBox);
        L.DomEvent.on(fbBox, 'mouseover', function(){
            map.scrollWheelZoom.disable();
        });
        L.DomEvent.on(fbBox, 'mouseout', function(){
            map.scrollWheelZoom.enable();
        });

         //TODO - this should happen in an event after elements have been added
         // which event though? Timeout is a hack but does the trick
         // actually this can probable just be handled in the callback from firebase on fetching from the facebookpost table
         setTimeout(()=>{
          const element = document.getElementById('fb-posts-here')
          FB.XFBML.parse(element); //this is the important magic call that makes facebook render all the posts out!
         }, 1000)

        return tabContainer;
      },



    });
    // End Field Notes control


  
    L.control.search = function(id, options) {
      return new L.Control.Search(id, options);
    }


    L.control.fieldNotes = function(id, options) {
      return new L.Control.fieldNotes(id, options);
    }

    L.control.search({
      data: items
    }).addTo(map)


    L.control.fieldNotes({
      data: items
    }).addTo(map)


    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
  }

    return {
      init: init,
 
    }
  }
  