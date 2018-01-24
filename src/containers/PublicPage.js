
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authActions } from '../actions';

class PublicPage extends Component {

  constructor(){
    super()
    this.state = {
      isDisabled: true
    }
}

  toggle() {
    this.setState({ isDisabled: !this.state.isDisabled })
  }
  componentWillMount() { }
  render() {
    const { signInWithFacebook } = this.props;
    const { isDisabled } = this.state;

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
                <input class="terms-and-conditions__checkbox" id="checkBox" type="checkbox" onChange={()=>this.toggle()}/>
                <div class="terms-and-conditions__message"> I have read and accept T&C's</div>
              </div>
            </div>
          </div>
        </div>

      <div class="fb-login">
        <div class="fb-login__container"  role="button" tabindex="0">
          <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td class="fb-login__icon">
                  <div>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" class="_5h0m" color="#ffffff"><path fill="#ffffff" d="M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.911.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.111.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.215.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.311.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"></path></svg><img class="_5h0l img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/lF-L3veiXx9.png" alt="app-facebook" width="24" height="24"/>
                  </span>
                </div>
                </td>
                <td class="fb-login__button">
                    <button id="fb-button" disabled={isDisabled} onClick={signInWithFacebook}>Continue with Facebook</button>
                </td>
              </tr>
            </tbody>
          </table>
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
