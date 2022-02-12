
const button = document.querySelector("#scroll")

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
   button.classList.toggle("active", window.scrollY > 800);
});
button.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
}
)


const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");
const lists = document.querySelectorAll("lists")


menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("navActive");
};

lists.onclick = ()=> {
  menuBtn.classList.remove("fa-times"); 
  navbar.classList.remove("navActive") 
  console.log('ishladi');
}


//  slider
var swiper = new Swiper(".home-slider", {
    autoplay:true,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
    autoplay:true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
  
    },
    1000: {
      slidesPerView:3,
       
    },

  },
});

let previewContainer = document.querySelector(".food-preview-container");
let previewBox = previewContainer.querySelectorAll(".food-preview");


document.querySelectorAll(".food .slide").forEach( food => {
  food.onclick = ()=> {
    previewContainer.style.display = "flex"
    let name = food.getAttribute("data-name");
    previewBox.forEach( preview => {
      let target = preview.getAttribute("data-target");
      if(name == target) {
        preview.classList.add("active")
      }
    })
  }
})

previewContainer.querySelector("#close-preview").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach( close => {
   close.classList.remove("active")
  })

} 


var swiper = new Swiper(".menu-slider", {
  autoplay:true,
loop: true,
centeredSlides: true,
spaceBetween: 20,
grabCursor: true,
autoHeight: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
}
});

var swiper = new Swiper(".blogs-slider", {
  autoplay:true,
loop: true,
autoHeight:true,
centeredSlides: true,
spaceBetween: 20,
grabCursor: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints: {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,

  },
  1080: {
    slidesPerView:3,
     
  },

},
});




