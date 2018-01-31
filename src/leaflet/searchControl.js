/* eslint-disable */
import { firebaseAuth } from '../utils/config';

export default function searchControl() {
// Search Control
  L.Control.Search = L.Control.extend({
    options: {
    // topright, topleft, bottomleft, bottomright
      position: 'topleft',
    },
    initialize(options) {
      L.Util.setOptions(this, options);
    },
    onAdd() {
    // happens after added to map
      const container = L.DomUtil.create('div', 'header');
      this.headerContainer = L.DomUtil.create('div', 'header__container', container);
      // Header
      this.headerWrapper = L.DomUtil.create('div', 'header__wrapper', this.headerContainer);
      this.searchInputContainer = L.DomUtil.create('div', 'search__container', this.headerWrapper);
      this.searchWrapper = L.DomUtil.create('div', 'search__wrapper', this.searchInputContainer);
      this.searchInput = L.DomUtil.create('input', 'search__input', this.searchWrapper);
      this.searchInput.setAttribute('autocomplete', 'off');
      this.searchInput.setAttribute('spellcheck', 'false');
      this.searchInput.setAttribute('autocorrect', 'false');
      this.searchInput.setAttribute('placeholder', 'Enter the landmark.');
      this.searchIcon = L.DomUtil.create('div', 'search__icon', this.searchWrapper);
      this.headerWrapper.addEventListener('click', focusSearch, false);
      this.container = L.DomUtil.create('div', 'container', this.headerWrapper);
      this.profile = L.DomUtil.create('div', 'profile', this.container);
      this.profileContainer = L.DomUtil.create('div', 'profile__container', this.profile);
      this.challenges = L.DomUtil.create('div', 'challenges', this.container);

      // Profile
      this.profilePicture = L.DomUtil.create('img', 'profile__picture', this.profileContainer);
      this.profilePicture.addEventListener('touchstart', logout, false);
      this.profilePicture.addEventListener('click', logout, false);

      /* Challenge container */
      this.challengeWrapper = L.DomUtil.create('div', 'challenge__wrapper', this.challenges);
      this.challengeWrapper1 = L.DomUtil.create('img', 'challenge__icon  challenge__1', this.challengeWrapper);
      this.challengeWrapper2 = L.DomUtil.create('img', 'challenge__icon  challenge__2', this.challengeWrapper);
      this.challengeWrapper3 = L.DomUtil.create('img', 'challenge__icon  challenge__3 dsd', this.challengeWrapper);
      this.challengeWrapper4 = L.DomUtil.create('img', 'challenge__icon  challenge__4', this.challengeWrapper);
      this.challengeWrapper5 = L.DomUtil.create('img', 'challenge__icon  challenge__5', this.challengeWrapper);


      function logout() {
        firebaseAuth.signOut();
        window.location.reload(true);
      }

      function focusSearch(event) {
        // bed - 19 Jan 2018 - have to manually tell this to focus for iOS.
        // I suspect this is due to iOS prevention of focus() events outside of
        // the user manually doing it, and outside of an originating 'click' event
        // - security reasons I think leaflet may be propogating touch events up? maybe.
        // ¯\_(ツ)_/¯ This seems to work though as we start from a click event
       event.target ||  event.srcElement.focus();
      }

      /* Image */
      this.profilePicture.src = window.photoURL;
      this.profilePicture.touchstart = () => {
        firebaseAuth.signOut();
        window.location.reload(true);
      };
      this.profilePicture.onclick = () => {
        firebaseAuth.signOut();
        window.location.reload(true);
      };
      return container;
    },
  });
  // End Search control

  // Logo control
  L.Control.Logo = L.Control.extend({
    options: {
    // topright, topleft, bottomleft, bottomright
      position: 'bottomleft',
    },
    initialize(options) {
      L.Util.setOptions(this, options);
    },
    onAdd() {
    // happens after added to map
      const container = L.DomUtil.create('div', 'logo__control');

      return container;
    },
  });

  

  L.control.search = () => new L.Control.Search();
  L.control.logo = () => new L.Control.Logo();
  L.control.search().addTo(window.map);
  L.control.logo().addTo(window.map);
}

