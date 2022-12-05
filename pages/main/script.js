const burger = document.getElementById("burger-menu");
const burgerOpenMenu = document.querySelector(".burger-open-menu");
const burgerClose = document.getElementById("burger-close");
const pets = document.getElementsByTagName("figure");
const leftButton = document.querySelector(".left_button");
const rightButton = document.querySelector(".right_button");
const range = document.getElementById("range");
const testimonials = document.getElementsByClassName("review_wrap");
const testimonialsWrapper = document.querySelector(".testimonial_cards");
const michael = document.getElementById("michael");
const oskar = document.getElementById("oskar");
const fredericka = document.getElementById("fredericka");
const mila = document.getElementById("mila");


let petsAnimationLeft = [
  {transform: 'translateX(-20px)'},
  {transform: 'translateX(0)'}
]

let petsAnimationRight = [
  {transform: 'translateX(20px)'},
  {transform: 'translateX(0)'}
]

let petsDuration = {
  duration: 500,
  iterations: 1
}

burger.addEventListener("click", function () {
  burgerOpenMenu.classList.toggle("active");
})

burgerClose.addEventListener("click", function () {
  burgerOpenMenu.classList.toggle("active");
})

leftButton.addEventListener("click", function () {
  for(let i = 0; i < pets.length; i++) {
    pets[i].style.order = Math.floor(Math.random() * 6);
    pets[i].animate(petsAnimationLeft, petsDuration);
  }
})

rightButton.addEventListener("click", function () {
  for(let i = 0; i < pets.length; i++) {
    pets[i].style.order = Math.floor(Math.random() * 6);
    pets[i].animate(petsAnimationRight, petsDuration);
  }
})

let cross = document.createElement("h4");
cross.innerHTML = "X";
cross.classList.add("cross");


testimonials[3].addEventListener("click", function () {
  let popUp = document.createElement("div");
  popUp.classList.add("popUp");
  testimonials[3].appendChild(popUp);
  michael.style.display = "block";
  michael.prepend(cross);
  popUp.appendChild(michael);
  document.body.style.pointerEvents = "none";
  cross.addEventListener("click", function () {
    popUp.style.display = "none";
    document.body.style.pointerEvents = "auto";
  })
})

testimonials[4].addEventListener("click", function () {
  let popUp = document.createElement("div");
  popUp.classList.add("popUp");
  testimonials[4].appendChild(popUp);
  oskar.style.display = "block";
  oskar.prepend(cross);
  popUp.appendChild(oskar);
  document.body.style.pointerEvents = "none";
  cross.addEventListener("click", function () {
    popUp.style.display = "none";
    document.body.style.pointerEvents = "auto";
  })
})

testimonials[5].addEventListener("click", function () {
  let popUp = document.createElement("div");
  popUp.classList.add("popUp");
  testimonials[5].appendChild(popUp);
  fredericka.style.display = "block";
  fredericka.prepend(cross);
  popUp.appendChild(fredericka);
  document.body.style.pointerEvents = "none";
  cross.addEventListener("click", function () {
    popUp.style.display = "none";
    document.body.style.pointerEvents = "auto";
  })
})

cross.style.pointerEvents = "auto"
document.body.style.pointerEvents = "auto";


let testimonialsAnimation = [
  {width: '95%'},
  {width: '100%'},
]

let testimonialsDuration = {
  duration: 100,
  iterations: 1
}

range.step = "12.5";

range.addEventListener("input", function () {
  for(let i = 0; i < testimonials.length; i++) {
    testimonialsWrapper.appendChild(testimonials[i]);
    testimonials[i].animate(testimonialsAnimation, testimonialsDuration);
  }
})
