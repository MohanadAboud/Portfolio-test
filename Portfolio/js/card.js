'use strict'

// vælger container class
var container = document.querySelector('.container')
// tilføjer en Eventlistener som bevæger IMG på X Akse
container.addEventListener('mousemove', function (e) {
  var x = e.offsetX
  var rotateY = (-1 / 100) * x + 2
  container.style = ` transform : perspective(350px) rotateY(${rotateY}deg)`
})

// et andet forsøg, men med X og Y aksen som jeg syntes blev for meget

// var container = document.querySelector('.container')
// container.addEventListener('mousemove', function (e) {
//   var x = e.offsetX
//   var y = e.offsetY
//   var rotateY = (-1 / 100) * x + 2
//   var rotateX = (4 / 60) * y - 10
//   container.style = ` transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
// })
