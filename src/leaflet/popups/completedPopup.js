/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../../api/index';
import { handlePopupClose, handlePopupOpen, disableMap, enableMap } from './utils'

export async function showCompletedPopup(challengespProgress) {

    const markup = document.createElement('div');
    markup.className = 'code-popup-done';
  
    markup.insertAdjacentHTML('afterbegin', `
    <div class="code-popup__footer">
        <div class="code-popup__tick"></div>
        <div class="code-popup__link--container">
          <span class="code-popup__link underline-transport"><a href="tombofthechosen.com">Transport me</a></span>
          <span class="code-popup__link underline-transport"><a href="tombofthechosen.com">to the tomb</a><</span>
        </div>
      </div>
    ` ) 
  
    markup.insertAdjacentHTML('afterbegin', `
    <div class="code-popup__container">
        <div class="code-popup__wrapper code-popup--1">
          <div class="code-popup__text code-popup__text--1"></div>
  
        </div>
  
        <div class="code-popup__wrapper code-popup--2">
          <div class="code-popup__text code-popup__text--2"></div>
        </div>
  
        <div class="code-popup__wrapper code-popup--3">
          <div class="code-popup__text code-popup__text--3"> </div>
        </div>
  
        <div class="code-popup__wrapper code-popup--4">
          <div class="code-popup__text code-popup__text--4"></div>
        </div>
  
        <div class="code-popup__wrapper code-popup--5">
          <div class="code-popup__text code-popup__text--5"></div>
        </div>
      </div>
    ` )  
    
    markup.insertAdjacentHTML('afterbegin', '<div class="code-popup__header">Well done</div>');
    markup.firstElementChild.insertAdjacentHTML('afterend', '<div class="final-code__message"> Congratulations you have discovered the landmark and revealed the code</div>');
  
  
    for (let i = 0; i < challengespProgress.length; i++) {
  
      if (challengespProgress[i] == 'challenge1') {
        markup.querySelector('.code-popup__text.code-popup__text--1').innerHTML = 'Neither stone nor'
  
      } else if (challengespProgress[i] == 'challenge2') {
        markup.querySelector('.code-popup__text.code-popup__text--2').innerHTML = 'sun shall stop'
        
      } else if (challengespProgress[i] == 'challenge3') {
        markup.querySelector('.code-popup__text.code-popup__text--3').innerHTML = 'the lion entering'
        
      } else if (challengespProgress[i] == 'challenge4') {
        markup.querySelector('.code-popup__text.code-popup__text--4').innerHTML = 'the city of'
        
      } else if (challengespProgress[i] == 'challenge5') {
        markup.querySelector('.code-popup__text.code-popup__text--5').innerHTML = 'endless ruin'
        
      }
    }
    return markup
    
  }