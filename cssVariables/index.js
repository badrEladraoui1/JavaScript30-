// const spacing = document.getElementsByName('spacing')
// console.log(spacing)
// const blur = document.getElementsByName('blur')
// console.log(blur)
// const baseColor = document.getElementsByName('base')
// console.log(baseColor)

const inputs = document.querySelectorAll('.controls input')
// console.log(inputs)

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    console.log(this.name)
    console.log(suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))