export default function Sound({
  btnCoffeeShopSound, 
  btnFireplaceSound,
  btnRainSound,
  btnForestSound   
}) {
  const audios = {
    buttonPressAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
  
    kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
  
    forestAudio: new Audio("./assets/Floresta.wav"),
    rainAudio: new Audio("./assets/Chuva.wav"),
    coffeeShopAudio: new Audio("./assets/Cafeteria.wav"),
    fireplaceAudio: new Audio("./assets/Lareira.wav"),
  }
  
  function timeEnd() {
    audios.kitchenTimer.play()
  }
  
  function buttonPress() {
    audios.buttonPressAudio.play()
  }
  
  function rainOn() {   
    let selected = btnRainSound.classList.contains("active") 
  
    audios.rainAudio.play()
    audios.rainAudio.loop = true
  
    if(selected) {
       audios.rainAudio.pause()
    }
  
    btnRainSound.classList.toggle("active") 
  }
  
  function forestOn() {
    let selected = btnForestSound.classList.contains("active") 
  
    audios.forestAudio.play()
    audios.forestAudio.loop = true
  
    if(selected) {
       audios.forestAudio.pause()
    }
  
    btnForestSound.classList.toggle("active") 
  }
  
  function coffeeShopOn() {
   let selected = btnCoffeeShopSound.classList.contains("active")
  
   audios.coffeeShopAudio.play()
   audios.coffeeShopAudio.loop = true
  
   if (selected) {
    audios.coffeeShopAudio.pause()
   }
  
   btnCoffeeShopSound.classList.toggle('active')
  }
  
  function fireplaceOn() {
    let selected = btnFireplaceSound.classList.contains('active')
    audios.fireplaceAudio.play()
    audios.fireplaceAudio.loop = true
  
    if(selected) {
      audios.fireplaceAudio.pause()
    }
  
    btnFireplaceSound.classList.toggle('active')
  }

  return {    
    fireplaceOn,
    rainOn,
    forestOn,
    coffeeShopOn,
    timeEnd,
    buttonPress,  
  }
}