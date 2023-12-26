// mobile slide menu
const mobileMenu = document.querySelector('#mobile-menu')
const openSlide = document.querySelector('#open-slide')
const closeSlide = document.querySelector('#close-slide')

openSlide.addEventListener('click', () => {
    mobileMenu.style.left = "0px"
})

closeSlide.addEventListener('click', () => {
    mobileMenu.style.left = "-100%"
})

// slide close
const mobileSlideClose = document.querySelectorAll('#mobile-slide-close')
for (let i = 0; i < mobileSlideClose.length; i++) {
    mobileSlideClose[i].addEventListener('click', () => {
        mobileMenu.style.left = "-100%"
    })
}