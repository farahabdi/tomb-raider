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
    const ne = {lat: -10, lng: 1960}
    var bounds = new L.LatLngBounds(sw, ne);
    
    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);

    let items = []


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
        this.searchIcon = L.DomUtil.create('div', 'search__icon', this.searchWrapper);

        /* Image */

        this.profile= L.DomUtil.create('div', 'profile', container);
        this.profilePicture= L.DomUtil.create('img', 'profile__picture', this.profile);

        this.profilePicture.src = window.photoURL

        var x = 3
        /*
        https://i.imgur.com/xJpeYCv.png
        this.form = L.DomUtil.create('form', 'form', container);
        var group = L.DomUtil.create('div', 'form-group', this.form);
        this.input = L.DomUtil.create('input', 'form-control input-sm', group);
        this.input.type = 'text';
        this.input.placeholder = this.options.placeholder;
        this.results = L.DomUtil.create('div', 'list-group', group);
        L.DomEvent.addListener(this.input, 'keyup', _.debounce(this.keyup, 300), this);
        L.DomEvent.addListener(this.form, 'submit', this.submit, this);
        L.DomEvent.disableClickPropagation(container);
        */
        return container;
      },
      onRemove: function (map) {

      },
      keyup: function(e) {

      },
      itemSelected: function(e) {

      },
      submit: function(e) {
      }
    });
    
    L.control.search = function(id, options) {
      return new L.Control.Search(id, options);
    }

    L.control.search({
      data: items
    }).addTo(map)
    
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);

    debugger


  }
  