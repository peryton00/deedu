const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach(
   (slides, index) => {
      slides.style.left = `${index * 100}%`
   }
)

const slideImage = () => {
   slides.forEach(
      (slide) => {
         slide.style.transform = `translateX(-${counter * 100}%)`
      }
   )
}

const goNext = () => {
   counter++
   if (counter > slides.length - 1) {
      counter = 0
      slideImage()
      return
   }
   slideImage()

}
const goPrev = () => {
   counter--
   if (counter < 0) {
      counter = slides.length - 1
      slideImage()
      return
   }
   slideImage()
}

const repeat = () => {
   goNext()
}
//setInterval(repeat, 2000)