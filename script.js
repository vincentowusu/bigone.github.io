let menu = document.querySelector(".menu")
let menuOpt = document.querySelector(".menuOpt")
let arrow = document.querySelector(".arrow")
let close = document.querySelector(".close")
let count = document.querySelector(".count")
let login = document.querySelector(".login")
let intro = document.querySelector(".intro")
let downBtn = document.querySelector(".intro .counter button")
let loginPage = document.querySelector(".loginPage")
let homePage = document.querySelector(".homePage")
let houseBefore = document.querySelector(".houseBefore")
let houseAfter = document.querySelector(".houseAfter")
let price = document.querySelector(".price")
let arrBtns = document.querySelectorAll(".arrBtns button")
let leftArr = document.querySelector(".leftArr")
let rightArr = document.querySelector(".rightArr")

let numberStart = 0

function countDown(){
    numberStart++
    if(numberStart == 10){
        clearInterval(myTimeOut)
        count.style = "display: none;"
        downBtn.classList.add("active")
    }
    count.innerHTML = numberStart
}

const myTimeOut = setInterval(countDown, 1000)

login.onclick = ()=>{
    loginPage.classList.add("active")
    intro.classList.add("active")
}

menu.onclick = ()=>{
    menuOpt.classList.add("active") 
 }
 
 close.onclick = ()=>{
     menuOpt.classList.remove("active")
 }
 arrow.onclick = ()=>{
    homePage.classList.add("active")
    intro.classList.remove("active")
 }

 let houseId = 1

 rightArr.addEventListener("click", () => { 
    if(houseId > 0 && houseId < 13){
        houseBefore.src = house[houseId].image
        houseId++
    }
 })
 leftArr.addEventListener("click", () => {
    if(houseId > 0 && houseId < 13){
        houseBefore.src = house[houseId].image
        houseId--
    }
 })