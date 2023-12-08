"use strict"

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLogin = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener("click",function(){
    wrapper.classList.add("active")
});

loginLink.addEventListener("click",function(){
    wrapper.classList.remove("active")
})

btnLogin.addEventListener("click",function(){
    wrapper.classList.add("activ-popap")
});


iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("activ-popap")
})