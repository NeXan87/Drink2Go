import{isEscapeKey}from"./utils.js";const headerElement=document.querySelector(".main-header"),addEventListener=()=>{document.addEventListener("keydown",closeMobileMenu),document.addEventListener("click",closeMobileMenu)},removeEventListener=()=>{document.removeEventListener("keydown",closeMobileMenu),document.removeEventListener("click",closeMobileMenu)},closeMobileMenu=e=>{(isEscapeKey(e)||!e.target.closest(".main-header__button")&&!e.target.closest(".main-header__site-list"))&&(document.removeEventListener("keydown",closeMobileMenu),document.removeEventListener("click",closeMobileMenu),headerElement.classList.remove("is-open"))};function onButtonElementClick(e){headerElement.classList.toggle("is-open"),headerElement.classList.contains("is-open")?(document.addEventListener("keydown",closeMobileMenu),document.addEventListener("click",closeMobileMenu)):closeMobileMenu(e)}const initButtonMenuActions=()=>{document.querySelector(".main-header__button").addEventListener("click",onButtonElementClick)};export{initButtonMenuActions};