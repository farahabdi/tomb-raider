/* eslint-disable */
export default function tabsControl() {
    // Field Notes Control
    L.Control.Tabs = L.Control.extend({
      options: {
      // topright, topleft, bottomleft, bottomright
        position: 'topright',
      },
      initialize(options) {
        // constructor
        L.Util.setOptions(this, options);
      },
      onAdd() {
        // const { map } = window;
        const tabContainer = L.DomUtil.create('div', 'tab__container');
  
        this.options = L.DomUtil.create('ul', 'nav nav-tabs', tabContainer);
        this.optionsTitle = L.DomUtil.create('li', 'active', this.options);
        this.optionsAnchor = L.DomUtil.create('a', '', this.optionsTitle);
      //  this.optionsAnchor.innerHTML = 'Options'
  
        this.field = L.DomUtil.create('div', 'tab-content', tabContainer);
        this.fieldTitle = L.DomUtil.create('div', 'tab-pane active', this.field );
        this.fieldAnchor = L.DomUtil.create('div', 'tab-pane', this.field );
       // this.fieldAnchor.innerHTML = 'Field Notes'
  
  
  
        self = this;
        function showFieldsTab(event) {
  
          var x = 3
          debugger
        }
  
        function showOptionsTab() {
          var x = 3
          debugger
        }
  
  
        return tabContainer;
      },
    });
    // End Field Notes control
    L.control.Tabs = (id, options) => new L.Control.Tabs(id, options);
  
    L.control.Tabs().addTo(window.map);
  }
  