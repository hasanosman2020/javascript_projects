const slides = document.querySelectorAll('.slider')
const prevButton = document.querySelector('.prev_button')
const nextButton = document.querySelector('.next_button')

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})

let counter = 0
//setup to make slideshow in a continuous cycle
prevButton.addEventListener('click', function () {
  counter--
  carousel()
})
nextButton.addEventListener('click', function () {
  counter++
  carousel()
})
function carousel () {
  if (counter === slides.length) {
    counter = 0
  } else if (counter < 0) {
    counter = slides.length - 1
  }
  //setup to remove buttons on start and end of slideshow so users cannot go before the first slide or after the last slide
  if (counter < slides.length - 1) {
    nextButton.style.display = 'block'
  } else {
    nextButton.style.display = 'none'
  }
  if (counter > 0) {
    prevButton.style.display = 'block'
  } else {
    prevButton.style.display = 'none'
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}
prevButton.style.display = 'none'
