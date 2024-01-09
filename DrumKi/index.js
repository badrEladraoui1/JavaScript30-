function playSound(e) {
    // console.log(e.code)

    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const drum = document.querySelector(`.drumDiv[data-key="${e.code}"]`)

    if (!audio) return // stop the function
    audio.currentTime = 0 // rewind to the start for fast repetitions
    audio.play()

    drum.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return // skips
    this.classList.remove('playing')
}

const drums = document.querySelectorAll('.drumDiv')
drums.forEach(drum => drum.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);

window.addEventListener('click', (e) => {
    console.log(e)
})