let menubar = document.querySelector('#menu-bar')
let mynav =document.querySelector('.navbar')
let userform =document.querySelector('#user-form')
let userlogin =document.querySelector('.user-login')


menubar.onclick = () =>{

    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}


userform.onclick = () =>{
    userlogin.classList.toggle('active')
}
window.onscroll =() =>{
    userlogin.classList.remove('active')
}