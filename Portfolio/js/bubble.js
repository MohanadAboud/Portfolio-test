'use strict'

const customCursor = document.getElementById('customCursor')
const interactiveElements = document.querySelectorAll('.card, .grid-item-four')

document.addEventListener('mousemove', (e) => {
  customCursor.style.top = `${e.clientY}px`
  customCursor.style.left = `${e.clientX}px`
})

interactiveElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1'
    element.style.cursor = 'none'
  })

  element.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0'
    element.style.cursor = 'auto'
  })
})

// bubble til projekt delen

const slideCursor = document.getElementById('slideCursor')
const imgElements = document.querySelectorAll('.img-bubble')

document.addEventListener('mousemove', (e) => {
  slideCursor.style.top = `${e.clientY}px`
  slideCursor.style.left = `${e.clientX}px`
})

imgElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    slideCursor.style.opacity = '1'
    element.style.cursor = 'none'
  })

  element.addEventListener('mouseleave', () => {
    slideCursor.style.opacity = '0'
    element.style.cursor = 'auto'
  })
})
