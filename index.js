const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

// remove
let remove = () => {
    slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.remove("nextSlide");
  });
    slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });
}

// activating slide
let active = () => {
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

// set next slide
let nextSlide = slideNumber++;
slides[nextSlide].classList.add("nextSlide");

// change next slide
let next = () => {
  remove();
  
  slideNumber++;
  
  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }
  
  active();
  reset();
}

//image slider next button
nextBtn.addEventListener("click", () => {
  next();
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  remove();

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  active();
  reset();
});

// reset slider interval
let reset = () => {
  clearInterval(playSlider);
  repeater();
}

//image slider autoplay
let playSlider;

let repeater = () => {
  playSlider = setInterval(function(){
    next();
  }, 5000);
}

repeater();

//stop the image slider autoplay on mouseover
// slider.addEventListener("mouseover", () => {
//   clearInterval(playSlider);
// });

//start the image slider autoplay again on mouseout
// slider.addEventListener("mouseout", () => {
//   repeater();
// });
  