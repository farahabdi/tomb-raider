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
      this.tabTitle = L.DomUtil.create('ul', 'nav nav-tabs', tabContainer);

      this.optionsTabTitle = L.DomUtil.create('li', 'options-tab active', this.tabTitle);
      this.optionsTabAnchor = L.DomUtil.create('a', '', this.optionsTabTitle);
      this.optionsTabAnchor.innerHTML = 'Options'

      this.fieldTabTitle = L.DomUtil.create('li', 'field-tab', this.tabTitle);
      this.fieldTabAnchor = L.DomUtil.create('a', '', this.fieldTabTitle);
      this.fieldTabAnchor.innerHTML = 'Field'

      this.tabContent = L.DomUtil.create('div', 'tab-content', tabContainer);
      this.optionsContent = L.DomUtil.create('div', 'tab-pane options-content active', this.tabContent);
      this.optionsContent.innerHTML = 'OPTIONS CONTENT'
      this.fieldContent = L.DomUtil.create('div', 'tab-pane field-content', this.tabContent);
      this.fieldContent.innerHTML = 'FIELD NOTES'


      // Event handlers

      this.fieldTabTitle.addEventListener('click', handleFieldnotes, false)
      this.optionsTabTitle.addEventListener('click', handleOptions, false)

      function handleOptions(event) {
        let optionsTab = document.getElementsByClassName('options-tab')[0]
        let fieldTab = document.getElementsByClassName('field-tab')[0]

        let optionsContent = document.getElementsByClassName('options-content')[0]
        let fieldContent = document.getElementsByClassName('field-content')[0]

        optionsTab.className = 'options-tab active'
        fieldTab.className = 'field-tab'

        optionsContent.className = 'tab-pane options-content active'
        fieldContent.className = 'tab-pane field-content'
      }

      function handleFieldnotes(event) {
        let optionsTab = document.getElementsByClassName('options-tab')[0]
        let fieldTab = document.getElementsByClassName('field-tab')[0]

        let optionsContent = document.getElementsByClassName('options-content')[0]
        let fieldContent = document.getElementsByClassName('field-content')[0]

        optionsTab.className = 'options-tab'
        fieldTab.className = 'field-tab active'

        optionsContent.className = 'tab-pane options-content'
        fieldContent.className = 'tab-pane field-content active'
      }

      return tabContainer;
    },
  });
  // End Field Notes control
  L.control.Tabs = (id, options) => new L.Control.Tabs(id, options);

  L.control.Tabs().addTo(window.map);
}
