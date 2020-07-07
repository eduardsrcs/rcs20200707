window.onload = function() {
  setTimeout(function(){
    console.log('After 4 s')
  }, 4000)

  setInterval(function(){
    let time = new Date()
    let hours = time.getHours()
    let mins = time.getMinutes()
    let sec = time.getSeconds()
    document.querySelector('#hours').innerHTML = `${make2digits(hours)} : ${make2digits(mins)} : ${make2digits(sec)}`

  }, 1000)
}

var make2digits = a => a < 10 ? `0${a}` : `${a}`
