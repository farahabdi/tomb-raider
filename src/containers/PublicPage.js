
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authActions } from '../actions';

class PublicPage extends Component {
  componentWillMount() { }
  render() {

    return (
      <main class="landing">
        <div class="logo">
          <img class="logo__image"/> 
        </div>

        <div class="notepad-1">
          <div class="notepad__container">
            <div class="notepad__wrapper notepad__wrapper-1"> 
              <div class="notepad__text"> 
                There's a reference to an undiscovered tomb in my father's notes. I need your help to find it.
              </div>
            </div> 
          </div>
        </div>


        <div class="notepad-2">
          <div class="notepad__container">
            <div class="notepad__wrapper notepad__wrapper-2"> 
              <div class="notepad__text"> 
                This key to locating it lies within an ancient code. Unfortunately for us, it's been broken up in pieces.
              </div>
            </div> 
          </div>
        </div>


        <div class="notepad-3">
          <div class="notepad__container">
            <div class="notepad__wrapper notepad__wrapper-3"> 
              <div class="notepad__text"> 
                Yu'll need to keep your wits about you and collect the pieces from unknown landmarks around the world.
              </div>
            </div> 
          </div>
        </div>



        <div class="notepad-4">
          <div class="notepad__container">
            <div class="notepad__wrapper notepad__wrapper-4"> 
              <div class="notepad__text"> 
                My father's company, Croft Holdings, will intel to help locate each landmark. Check out my Field Notes or @Croft HoldingsAU on Facebook for everything they have.
              </div>
            </div> 
          </div>
        </div>



        <div class="notepad-5">
          <div class="notepad__container">
            <div class="notepad__wrapper notepad__wrapper-5"> 
              <div class="notepad__text"> 
                Each landmark you uncover will give you an extra chance to win a Cape Town adventure for two worth $15,000.
              </div>
            </div> 
          </div>
        </div>



        <div class="notepad-6">
          <div class="notepad__container">
            <div class="notepad__wrapper notepad__wrapper-6"> 
              <div class="notepad__text notepad__text-6"> 
                For those clever enough to find the tomb, extra riches await. Including 30 more chances to win the trip or an exclusive screening of Tomb Raider with 10 friends.
              </div>
            </div> 
          </div>
        </div>


        <div class="terms-and-conditions">
          <div class="terms-and-conditions__container">
            <div class="terms-and-conditions__wrapper">
              <div class="terms-and-conditions__content">
                <input class="terms-and-conditions__checkbox" id="checkBox" type="checkbox"/>
                <div class="terms-and-conditions__message"> I have read and accept T&C's</div>
              </div>
            </div>
          </div>
        </div>


        <div class="fb-login">
            <div class="fb-login__container">
                <div class="fb-login__wrapper"> 
                
                </div>
            </div>
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
