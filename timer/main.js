const timer = document.querySelector("h3.timer")

function getClock(){
  const date = new Date()
  const day = String(date.getDay())
  const hour = String(date.getHours()).padStart(2, "0")
  const minute = String(date.getMinutes()).padStart(2, "0")
  const second = String(date.getSeconds()).padStart(2, "0")
  timer.innerText = `${day}d ${hour}h ${minute}m ${second}s`
}

getClock()
setInterval(getClock, 1000)