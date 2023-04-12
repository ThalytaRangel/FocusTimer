import Controls from './controls.js'
import Sound from './sounds.js'
import Timer from './timer.js';

import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus5,
  btnLess5, 
  btnFireplaceSound, 
  btnForestSound,
  btnRainSound,
  btnCoffeeShopSound,
  minutesDisplay,
  secondsDisplay
} from './elements.js';

const sounds = Sound({
  btnCoffeeShopSound, 
  btnFireplaceSound, 
  btnRainSound,
  btnForestSound
})
const controls = Controls({
  btnPause,
  btnPlay,  
})

let minutes = Number(minutesDisplay.textContent)

//Eventos
btnPlay.addEventListener('click', controls.play)
btnPause.addEventListener('click', controls.pause)
btnStop.addEventListener('click', controls.stop)
btnPlus5.addEventListener('click', controls.increase)
btnLess5.addEventListener('click', controls.decrease)
btnRainSound.addEventListener('click', sounds.rainOn)
btnForestSound.addEventListener('click', sounds.forestOn)
btnCoffeeShopSound.addEventListener('click', sounds.coffeeShopOn)
btnFireplaceSound.addEventListener('click', sounds.fireplaceOn)


export { minutesDisplay, secondsDisplay, minutes}