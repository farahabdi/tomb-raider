/* eslint-disable */

export function crossIcon(challenge) {
    let challengeKey = challenge.slice(-1);
    document.getElementsByClassName(`challenge__icon challenge__${challengeKey}`)[0].className = `challenge__icon challenge__${challengeKey} challenge__${challengeKey}--complete`;

}