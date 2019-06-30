let burger = document.querySelector("nav.navbar .burger")
let menu = document.querySelector("nav.navbar .navbar-menu")
if (menu && burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active")
    menu.classList.toggle("is-active")
  })
}

// modal 
document.querySelectorAll(".proj").forEach(proj => {
  proj.addEventListener("click", () => {
    let modal = document.getElementById(proj.dataset.target)
    modal.classList.toggle("is-active")
    document.documentElement.classList.toggle("is-clipped")
  })
})
document.querySelectorAll('.modal').forEach(md => {
  md.querySelector('.modal-close').addEventListener('click', ()=>{
    md.classList.toggle("is-active")
    document.documentElement.classList.toggle("is-clipped")
  })
})

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    // scroll to elemnet
    let target = anchor.getAttribute('href') // #team
    let targetEle = document.querySelector(target)
    targetEle.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
})

// swiper
let mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
        slidesPerView: 1,
        spaceBetween: 30
    }
  }
})

AOS.init()