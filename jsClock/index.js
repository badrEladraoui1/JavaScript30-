
const hoursHand = document.querySelector('.hours-hand')
const minutesHand = document.querySelector('.minutes-hand')
const secondsHand = document.querySelector('.seconds-hand')

function setDate() {
    const now = new Date()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const secondsDeg = ((seconds / 60) * 360) + 90
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`
    console.log("seconds : ", seconds)

    const minutesDeg = ((minutes / 60) * 360) + 90
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`
    console.log("minutes : ", minutes)

    const hoursDeg = ((hours / 12) * 360) + 90
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`
    console.log("hours : ", hours)
}

setInterval(setDate, 1000)





