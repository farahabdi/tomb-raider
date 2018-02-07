
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authActions } from '../actions';

class PublicPage extends Component {

  constructor() {
    super()
    this.state = {
      isDisabled: true
    }

    var preloadImg = new Image();
    preloadImg.onload = () => {
      let loaderEl = document.getElementById('animation_container');
      if (loaderEl && loaderEl.parentNode) {
        loaderEl.parentNode.removeChild(loaderEl);
      }
    }
    const tablet = 740;
    if(window.matchMedia( "(min-width: "+tablet+"px)" ).matches){
      preloadImg.src = "images/landing@2x.jpg";
    } else {
      preloadImg.src = "images/landing.jpg";      
    }
    // console.error(preloadImg.src)    
  }

  toggle() {
    this.setState({ isDisabled: !this.state.isDisabled })
  }
  componentWillMount() { }
  render() {
    const { signInWithFacebook } = this.props;
    const { isDisabled } = this.state;

    return (
      <main className="landing">
        
          <div className="logo">
            <div className="logo__image" />
          </div>
        <div  className="landing__container">
          <div className="notes">

            <div className="notepad-1">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-1">
                  <div className="notepad__text">
                  There’s reference to an undiscovered tomb in my father’s notes. I need your help to find it.
                  </div>
                </div>
              </div>
            </div>


            <div className="notepad-2">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-2">
                  <div className="notepad__text">
                  The key to locating it lies within an ancient code. Unfortunately for us, it’s been broken up in pieces.
                  </div>
                </div>
              </div>
            </div>


            <div className="notepad-3">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-3">
                  <div className="notepad__text">
                  You’ll need to keep your wits about you and collect the pieces from unknown landmarks around the world.
                  </div>
                </div>
              </div>
            </div>



            <div className="notepad-4">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-4">
                  <div className="notepad__text">
                  My father's company, Croft Holdings, will provide intel to help locate each landmark. Check out my Field Notes or @CroftHoldingsAU on Facebook for everything they have.
                  </div>
                </div>
              </div>
            </div>



            <div className="notepad-5">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-5">
                  <div className="notepad__text">
                  Each landmark you uncover will give you an extra chance to win a Cape Town adventure for two worth $15,000.

                  </div>
                </div>
              </div>
            </div>



            <div className="notepad-6">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-6">
                  <div className="notepad__text notepad__text-6">
                  For those that find the tomb, extra riches await. Including 20 bonus entries into the main prize, as well as the chance to win a luxurious private screening of Tomb Raider for you and 10 friends.
                  </div>
                </div>
              </div>
            </div>
          </div>


          <footer>
            <div className="terms-and-conditions">
              <div className="terms-and-conditions__container">
                  <input className="terms-and-conditions__checkbox" id="checkBox" type="checkbox" onChange={() => this.toggle()} />
                  <a  target="_blank" className="instructions__terms" style={{display:'block'}} href="/Tomb_Raider_V8 _T&C_STC_31.1.18_PERMIT_INC.pdf">
                    <div className="terms-and-conditions__message">  I have read and accept <span className="underline underline--bacon">T&C's</span></div>
                  </a>
              </div>
              <div className="fb-button__container">
                <div className={`fb-button ${isDisabled ? 'fb-login--disabled' : ''}`}>
                  <a onClick={isDisabled ? null : signInWithFacebook} className="btn btn-block btn-social btn-facebook">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" class="_5h0m" color="#ffffff"><path fill="#ffffff" d="M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.911.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.111.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.215.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.311.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"></path></svg>


                  <span className="signin__message">  Sign in with Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>         
        </div>
      </main>
    );
  }
}

PublicPage.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signInWithFacebook: authActions.signInWithFacebook,
};

export default connect(null, mapDispatchToProps)(PublicPage);
