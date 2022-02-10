const msSpan = document.querySelector('#ms')
const secondsSpan = document.querySelector('#seconds')
const minutesSpan = document.querySelector('#minutes')

const initButton = document.querySelector('.init')
const resetButton = document.querySelector('.reset')
const stopButton = document.querySelector('.stop')

let ms = 0
let seconds = 0
let minutes = 0
let cron

const insertHTML = () => {
  const formatMs = ms < 10 ? `0${ms}`: ms
  const formatSec = seconds < 10 ? `0${seconds}` : seconds
  const formatMin = minutes < 10 ? `0${minutes}`: minutes

  msSpan.innerHTML = formatMs
  secondsSpan.innerHTML = formatSec
  minutesSpan.innerHTML = formatMin
}

const timer = () => {
  ms++
  if (ms === 99) {
    seconds ++ 
    ms = 0
  }

  if (seconds === 59) {
    minutes++
    seconds = 0
  }

  if (minutes === 60) {
    initButton.classList.remove('active')
    stopButton.classList.remove('active')
    reset()
  }
  insertHTML()
}

const init = () => {
  cron = setInterval(timer, 10)
}

const stop = () => {
  clearInterval(cron)
}

const reset = () => {
  clearInterval(cron)
  ms = 0
  seconds = 0
  minutes = 0
  insertHTML()
}

initButton.addEventListener('click', () => {
  initButton.classList.add('active')
  stopButton.classList.add('active')
  init()
})

stopButton.addEventListener('click', () => {
  initButton.classList.remove('active')
  stopButton.classList.remove('active')
  stop()
})


resetButton.addEventListener('click', () => {
  initButton.classList.remove('active')
  stopButton.classList.remove('active')
  reset()
})