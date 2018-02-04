
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
    preloadImg.src = "images/landing@2x.jpg";
    console.error(preloadImg.src)    
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
                    There's a reference to an undiscovered tomb in my father's notes. I need your help to find it.
                  </div>
                </div>
              </div>
            </div>


            <div className="notepad-2">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-2">
                  <div className="notepad__text">
                    This key to locating it lies within an ancient code. Unfortunately for us, it's been broken up in pieces.
                  </div>
                </div>
              </div>
            </div>


            <div className="notepad-3">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-3">
                  <div className="notepad__text">
                    You'll need to keep your wits about you and collect the pieces from unknown landmarks around the world.
                  </div>
                </div>
              </div>
            </div>



            <div className="notepad-4">
              <div className="notepad__container">
                <div className="notepad__wrapper notepad__wrapper-4">
                  <div className="notepad__text">
                    My father's company, Croft Holdings, will intel to help locate each landmark. Check out my Field Notes or @Croft HoldingsAU on Facebook for everything they have.
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
                    For those clever enough to find the tomb, extra riches await. Including 30 more chances to win the trip or an exclusive screening of Tomb Raider with 10 friends.
                  </div>
                </div>
              </div>
            </div>
          </div>


          <footer>
            <div className="terms-and-conditions">
              <div className="terms-and-conditions__container">
                  <input className="terms-and-conditions__checkbox" id="checkBox" type="checkbox" onChange={() => this.toggle()} />
                  <a  target="_blank" className="instructions__terms" style={{display:'block'}} href="https://firebasestorage.googleapis.com/v0/b/tomb-raider-app-34101.appspot.com/o/Tomb%20Raider%20-%20V7%20-%20T%26C%20-%20STC%20-%2022.1.18%20-%20APP.DOCX?alt=media&token=8ba9c7eb-4456-4f05-a981-adb917787b2a">
                    <div className="terms-and-conditions__message">  I have read and accept <span className="underline underline--bacon">T&C's</span></div>
                  </a>
              </div>
              <div className="fb-button__container">
                <div className={`fb-button ${isDisabled ? 'fb-login--disabled' : ''}`}>
                  <a onClick={isDisabled ? null : signInWithFacebook} className="btn btn-block btn-social btn-facebook">
                  <span className="fa fa-facebook"></span> <span className="signin__message">  Sign in with Facebook</span>
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
