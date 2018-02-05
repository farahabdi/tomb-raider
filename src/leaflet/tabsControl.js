/* eslint-disable */
import { fetchFacebookPosts } from '../api/index'
import { firebaseAuth } from '../utils/config'

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



      let tabContainer = L.DomUtil.create('div', 'tab__container');
      this.field = L.DomUtil.create('div', 'field', tabContainer);




      /* Options tab */
      this.optionsElement = L.DomUtil.create('div', 'options leaflet-control', tabContainer);
      this.optionsContainerElement= L.DomUtil.create('div', 'options__container options__container_closed', this.optionsElement );

      /* Text in options Tab */
      this.optionsText = L.DomUtil.create('div', 'options__wrapper', this.optionsContainerElement);
      this.optionsText.insertAdjacentHTML('afterbegin', `
        <div class="instructions">
          <div class="cross__wrapper" onClick='showOptionsTab()'>
            <div class="cross"> </div>
          </div>
          
          <div class="instructions__header"> 
            <div> Options </div>
          </div>
          <div class="instructions__signout">
            <div> Sign out </div>
            <div class="tick"></div>
          </div>
          <div class="instructions__message">
            <div> Instructions</div>
          </div>
          <a  target="_blank" class="instructions__terms" style="display:block" href="/Tomb_Raider_V8 _T&C_STC_31.1.18_PERMIT_INC.pdf">
            <div class="tick"></div>
            <div> Terms and conditions </div>
          </a>
          <div class="instructions__message">
            <div class="fb-like" data-href="https://www.facebook.com/CroftHoldingsAU/" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="false"></div>
          </div>
          </div>
        </div>
      ` )  
      FB.XFBML.parse(this.optionsText); //this is the important magic call that makes facebook render


      // TODO put this facebook stuff in the OTHER folder, not the options folder     
      const fbBoxc = L.DomUtil.create('div', 'fb_post_container',  this.field );
      

      this.optionsElement.addEventListener("click", showOptionsTab, false); //work around for iOS need to capture click
 

      this.fieldWrapper = L.DomUtil.create('div', 'field__wrapper field__wrapper-closed', this.field );
      this.fieldWrapper.addEventListener("click", showOptionsTab, false); //work around for iOS need to capture click
      this.fieldWrapper.setAttribute("tabindex", "1")

      this.fieldTextContainer = L.DomUtil.create('div', 'field-text__container', this.fieldWrapper);
      this.fieldTextHeader = L.DomUtil.create('div', 'field-text__header', this.fieldTextContainer);
      this.fieldTextTitle = L.DomUtil.create('div', 'field-text__title', this.fieldTextHeader);
      this.fieldTextCross = L.DomUtil.create('div', 'field-text__cross', this.fieldTextHeader);
      this.fieldTextMessage = L.DomUtil.create('div', 'field-text__message',this.fieldTextContainer);


      this.fieldTextTitle.innerHTML = 'Field Notes'
      this.fieldTextMessage.innerHTML = "Use Croft Holding's intel and work with your fellow Tomb Raiders to find the five landmarks"


      this.fbBox = L.DomUtil.create('div', 'fb_post_container',  this.fieldWrapper  );
      this.fieldTabClick =  L.DomUtil.create('div', 'field__tab-click',  this.fieldWrapper  );
    //  this.fbBox.addEventListener("click", showfield, false); //work around for iOS need to capture click

      this.fieldTabClick.addEventListener("click", showfield, false); //work around for iOS need to capture click
      this.fieldTextCross.addEventListener("click", showfield, false); //work around for iOS need to capture click


   



      let self = this;

      function showfield(event){
        
        let fbContainerElement = document.getElementsByClassName('fb_post_container')[0]
        let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]
        const logoElement = document.getElementsByClassName('leaflet-bottom leaflet-left')[0];
        const fieldElement = document.getElementsByClassName('field')[0];


     
        //toggle the css class name manually to open or close the tab
        if(self.fieldWrapper.className === 'field__wrapper field__wrapper-open'){
          self.fieldWrapper.className = 'field__wrapper field__wrapper-closed'
          fbBox.className = 'fb_post_container fb_post_container__closed'
          fbContainerElement.className = 'fb_post_container fb_post_container--closed'

          fieldElement.className = 'field'
          headerElement.className = 'leaflet-top leaflet-left'
          logoElement.className = 'leaflet-bottom leaflet-left'

          const panelElement = document.getElementsByClassName('leaflet-top leaflet-left')[0];

          panelElement.className = "leaflet-top leaflet-left"
          logoElement.className = "leaflet-bottom leaflet-left"

          headerElement.className = 'leaflet-top leaflet-left'



          map.scrollWheelZoom.enable();
          map.dragging.enable();
          event.stopPropagation()
        } else {

        document.getElementsByClassName('leaflet-top leaflet-left')[0];



          headerElement.className = "leaflet-top leaflet-left hide-header"
          // logoElement.className = "leaflet-bottom leaflet-left"
          fieldElement.className = 'field field--open'







          self.fieldWrapper.className = 'field__wrapper field__wrapper-open'
          fbBox.className = 'fb_post_container fb_post_container__opened onTop'
          fbContainerElement.className = 'fb_post_container'
          map.scrollWheelZoom.disable();
          map.dragging.disable();
        }
    }

      function showOptionsTab(event){
   

        let element = document.getElementsByClassName('field__wrapper')[0]
        let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]

              // Options Buttons
          let signOutElement = document.getElementsByClassName('instructions__signout')[0]
          let instructionsElement = document.getElementsByClassName('instructions__message')[0]
          let termsAndCondotionsElement = document.getElementsByClassName('instructions__terms')[0]

       

          signOutElement.addEventListener("click", logout, false);
          instructionsElement.addEventListener("click", logout, false); 
          //termsAndCondotionsElement.addEventListener("click", showOptionsTab, false); 


        if (element.className == "field__wrapper field__wrapper-open") {
          event.stopPropagation()
          return
        }

        if(self.optionsElement.className === 'options__container options__container-open'){
            self.optionsElement.className = 'options__container options__container_close'
            self.optionsElement.className = "options leaflet-control"
            headerElement.className = 'leaflet-top leaflet-left'
       } else if (self.optionsElement.className == "options leaflet-control onTop") {
            self.optionsElement.className = 'options leaflet-control'
            headerElement.className = 'leaflet-top leaflet-left'
       } else {
            self.optionsElement.className = 'options__container options__container-open'
            self.optionsElement.className = "options leaflet-control onTop"
            headerElement.className = 'leaflet-top leaflet-left hide-header'
       }
     }

     function logout() {
      firebaseAuth.signOut();
      localStorage.clear()
      window.location.reload(true);
    }

     let fbBox = this.fbBox
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
        posts.reverse().forEach(post => {
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
  L.control.Tabs = (id, options) => new L.Control.Tabs(id, options);

  L.control.Tabs().addTo(window.map);
}
