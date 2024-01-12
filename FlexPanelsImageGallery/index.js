const panels = document.querySelectorAll('.panel')
console.log(panels)


function toggleOpen() {
    console.log("hello")
    this.classList.toggle('open')
}

function toggleActive(e) {
    if (e.propertyName.includes('flex'))
        this.classList.toggle('open-active')
    // this.classList.add('open-active')
    // if (!this.classList.contains('open')) this.classList.remove('open-active')
}

panels.forEach(pannel => pannel.addEventListener('click', toggleOpen))
panels.forEach(pannel => pannel.addEventListener('transitionend', toggleActive))

