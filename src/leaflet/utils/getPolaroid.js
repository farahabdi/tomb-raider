/* eslint-disable */

import * as polaroid from './icons';

export function getPolaroid(challenge) {

    const polaroidIcon = L.icon({
      iconUrl: iconIndex[challenge],
      className: 'polaroid',
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
  
    return polaroidIcon
  }
  
  
  
  const iconIndex = {
    'challenge1': polaroid.stonehengeIcon,
    'challenge2': polaroid.kenyaIcon,
    'challenge3': polaroid.chinaIcon,
    'challenge4': polaroid.mexicoIcon,
    'challenge5': polaroid.sigiriyaIcon,
  }