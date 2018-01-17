/* eslint-disable */

export default function init () {
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
    
    // dimensions of the image
    var w = 3860,
        h = 2180,
        url = 'https://i.imgur.com/YADK5Op.jpg';
    
    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    var northEast = map.unproject([w, 0], map.getMaxZoom()-1);

    const sw = {lat: -1100, lng: 10}
    const ne = {lat: -10, lng: 2200}
    var bounds = new L.LatLngBounds(sw, ne);
    
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
        var container = L.DomUtil.create('div', 'header__container');
        this.headerWrapper = L.DomUtil.create('div', 'header__wrapper', container);

        /* Search */  
        this.searchContainer  = L.DomUtil.create('div', 'search__container', this.headerWrapper);
        this.searchWrapper= L.DomUtil.create('div', 'search__wrapper', this.searchContainer);
        this.searchInput = L.DomUtil.create('input', 'search__input', this.searchWrapper);

        this.searchInput.setAttribute("autocomplete", "off")
        this.searchInput.setAttribute("spellcheck", "false")
        this.searchInput.setAttribute("autocorrect", "false")
        this.searchIcon = L.DomUtil.create('div', 'search__icon', this.searchWrapper);

        /* Image */

        this.profile= L.DomUtil.create('div', 'profile', container);
        this.profilePicture= L.DomUtil.create('img', 'profile__picture', this.profile);



          /* Image */

        this.profilePicture.src = window.photoURL
        this.profilePicture.onclick = () => {
          window.firebaseAuth.signOut()
          window.location.reload(true);
        }
        var x = 3
        return container;
      }
    });
    // End Search control

    //Folder Control
    L.Control.Folder = L.Control.extend({
      options: {
        // topright, topleft, bottomleft, bottomright
        position: 'topright',
        placeholder: 'Folder...'
      },
      initialize: function (options /*{ data: {...}  }*/) {
        // constructor
        L.Util.setOptions(this, options);
      },
      onAdd: function (map) {
        // happens after added to map
         /* Blue folder */
         var blueFolderContainer = L.DomUtil.create('div', 'blueFolder__container');
         this.blueFolderWrapper = L.DomUtil.create('div', 'blueFolder__wrapper', blueFolderContainer );
         this.blueFolderBox = L.DomUtil.create('div', 'blueFolder__box', blueFolderContainer );

        return blueFolderContainer;
      }
    });
    // End Folder control















    
    L.control.search = function(id, options) {
      return new L.Control.Search(id, options);
    }

    L.control.folder = function(id, options) {
      return new L.Control.Folder(id, options);
    }

    L.control.search({
      data: items
    }).addTo(map)

    L.control.folder({
      data: items
    }).addTo(map)
    
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);

    debugger


  }
  