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
      const { map } = window;
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
      // TODO put this facebook stuff in the OTHER folder, not the options folder
      const fbBox = L.DomUtil.create('div', 'fb_post_container', this.field);
      fbBox.addEventListener('click', showfield, false); // work around for iOS need to capture click
      this.optionsElement.addEventListener('click', showOptionsTab, false); // work around for iOS need to capture click

      this.fieldWrapper = L.DomUtil.create('div', 'field__wrapper field__wrapper-closed', this.field);
      this.fieldWrapper.addEventListener('click', showOptionsTab, false); // work around for iOS need to capture click
      this.fieldWrapper.setAttribute('tabindex', '1');

      self = this;
      function showfield() {
      // toggle the css class name manually to open or close the tab
        if (self.fieldWrapper.className === 'field__wrapper field__wrapper-open') {
          self.fieldWrapper.className = 'field__wrapper field__wrapper-close';
          fbBox.className = 'fb_post_container fb_post_container__closed';
        } else {
          self.fieldWrapper.className = 'field__wrapper field__wrapper-open';
          fbBox.className = 'fb_post_container fb_post_container__opened onTop';
        }
      }

      function showOptionsTab() {
        if (self.optionsElement.className === 'options__container options__container-open') {
          self.optionsElement.className = 'options__container options__container_close';
          self.optionsElement.className = 'options leaflet-control';
        } else if (self.optionsElement.className === 'options leaflet-control onTop') {
          self.optionsElement.className = 'options leaflet-control';
        } else {
          self.optionsElement.className = 'options__container options__container-open';
          self.optionsElement.className = 'options leaflet-control onTop';
        }
      }

      fbBox.id = 'fb-posts-here';
      // placeholder FB posts - TODO read these from firebase
      fbBox.innerHTML = '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350" mobile="true"></div>';
      fbBox.innerHTML += '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350"></div>';
      fbBox.innerHTML += '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350"></div>';
      fbBox.innerHTML += '<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="350"></div>';
      L.DomEvent.disableClickPropagation(fbBox);
      L.DomEvent.on(fbBox, 'mouseover', () => {
        map.scrollWheelZoom.disable();
      });
      L.DomEvent.on(fbBox, 'mouseout', () => {
        map.scrollWheelZoom.enable();
      });

      // TODO - this should happen in an event after elements have been added
      // which event though? Timeout is a hack but does the trick
      // actually this can probable just be handled in the callback from firebase on
      // fetching from the facebookpost table
      setTimeout(() => {
        const element = document.getElementById('fb-posts-here');
        // this is the important magic call that makes facebook render all the posts out!
        FB.XFBML.parse(element);
      }, 1000);

      return tabContainer;
    },
  });
  // End Field Notes control
  L.control.Tabs = (id, options) => new L.Control.Tabs(id, options);

  L.control.Tabs().addTo(window.map);
}
