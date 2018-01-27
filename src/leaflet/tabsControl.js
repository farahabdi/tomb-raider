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
      this.field = L.DomUtil.create('div', 'field', tabContainer);
      /* Options tab */
      this.optionsElement = L.DomUtil.create('div', 'options', tabContainer);
      this.optionsContainerElement = L.DomUtil.create('div', 'options__container options__container_closed', this.optionsElement);

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
          `);


      this.fieldWrapper = L.DomUtil.create('div', 'field__wrapper field__wrapper-closed', this.field);
      this.field.addEventListener('click', showFieldsTab, false);
      this.optionsContainerElement.addEventListener('click',showOptionsTab, false);
      // work around for iOS need to capture click
      this.fieldWrapper.setAttribute('tabindex', '1');

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
