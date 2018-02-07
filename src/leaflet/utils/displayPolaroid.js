/* eslint-disable */
import { getPolaroid } from './getPolaroid'
import { coordinates } from './coordinates'

export function displayPolaroid(challenge) {

    const polaroidIcon = getPolaroid(challenge)
    L.marker(coordinates[challenge], { icon: polaroidIcon }).addTo(window.map);

}