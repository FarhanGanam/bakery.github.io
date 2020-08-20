// Loader Animation

const loading = document.querySelector('.loading');

function init() {
  setTimeout(() => {
    loading.style.opacity = 0;
    loading.style.display = 'none';
  }, 2000);
} 

init();


// Smooth Scroll
var scroll = new SmoothScroll('#nav a[href*="#"]', {
  speed: 600,
  offset: 100,
});



// NavBar Hide on Scroll

// let prevScrollpos = window.pageYOffset;
// let navbar = document.querySelector('#nav');

// window.addEventListener('scroll', (event) => {
//   let currentScrollpos = window.pageYOffset;
//   prevScrollpos > currentScrollpos 
//     ? navbar.style.setProperty('top', 0) 
//     : navbar.style.setProperty('top', '-100px')
//   prevScrollpos = currentScrollpos;
// })



// Hamnurger menu

const menuBtn = document.querySelector('.menu-btn');
const btn = document.querySelector('.btn')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  btn.classList.toggle('show');
});




// Navbar Shrink on Scroll

const navBar = document.getElementById('nav');
const navImg = document.getElementById('img');
const links = document.querySelectorAll('#link');
const menu = document.querySelector('.btn');
const burger = document.querySelector('.menu-btn');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if(scrollHeight > navHeight) {
    navBar.classList.add('fixed')
    navBar.style.background = 'white';
    navImg.style.width = "90px";
    links.forEach(function(link) {
      link.style.color = 'black'
    })
  } else {
    navBar.classList.remove('fixed');
    navBar.style.background = 'rgba(255, 255, 255, 0.1)'
    navImg.style.width = "120px";
    links.forEach(function(link) {
      link.style.color = 'white'
    })
  }
})

links.forEach(function(link) {
  link.addEventListener('click', function(e) {

    e.preventDefault();
    burger.classList.remove('open')
    menu.classList.remove('show')
  })
})


// Showcase Slider

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current Slide
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current Slide
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

//  Buttons events

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
})

if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, 15000);
  }


// Image Scroll animation
const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function ()
{
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -0.15 + "px";
})

const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function ()
{
  let offset = window.pageYOffset;
  parallax2.style.backgroundPositionY = offset * -0.2 + "px";
})



// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } 
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// --------Image Slider ----------

$(document).ready(function() {
  $('#responsive').lightSlider({
      item:6,
      loop:false,
      slideMove:2,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
      responsive : [
          {
              breakpoint:800,
              settings: {
                  item:3,
                  slideMove:1,
                  slideMargin:6,
                }
          },
          {
              breakpoint:480,
              settings: {
                  item:2,
                  slideMove:1
                }
          }
      ]
  });  
});