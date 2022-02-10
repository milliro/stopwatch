const msSpan = document.querySelector('#ms')
const secondsSpan = document.querySelector('#seconds')
const minutesSpan = document.querySelector('#minutes')
const initButton = document.querySelector('.init')
const resetButton = document.querySelector('.reset')
const pauseButton = document.querySelector('.pause')

let ms = 0
let seconds = 0
let minutes = 0

const msFunction = () => {
  ms++
  ms === 99 ? ms = 0 : 0
  ms < 10 ? msSpan.innerHTML = `0${ms}` : msSpan.innerHTML = ms
}

const secFunction = () => {
  seconds++
  seconds < 10 ? secondsSpan.innerHTML = `0${seconds}` : secondsSpan.innerHTML = seconds
  seconds === 59 ? seconds = 0 : 0
}

const minFunction = () => {
  minutes++
  minutes < 10 ? minutesSpan.innerHTML = `0${minutes}` : minutesSpan.innerHTML = minutes
  minutes === 60 ? minutes = 0 : 0
}


initButton.addEventListener('click', () => timer.init())
