burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-navResp')
    navList.classList.toggle('v-listResp')
    rightNav.classList.toggle('v-listResp')
    
})


function watchVideo(){
    window.open("https://youtu.be/hukBVVaWBVg")
}