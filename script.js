const textDisplay = document.getElementById('text')
const phrases = ['God is Moving']
let i = 0
let j = 0
let currentPhrase = []

function loop () {
  textDisplay.innerHTML = currentPhrase.join(" ")

  if (i < phrases.length) {

    if (j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])

      j++
    }
  }
  setTimeout(loop, 500)
}

loop()


const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})


close_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))
})