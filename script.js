//To jest artykuł na temat wzrostu sprzedaży produktów wegańskich

const begin = document.getElementById("Begin");
const explication = document.getElementById("Explication");
const final = document.getElementById("Final");

const clock = document.getElementById("Clock");
const timeofday = document.getElementById("TimeofDay");

const addZero = (num) => {
    if(num < 10){
        return `0${num}`
    }
    else{
        return num;
    }
}

const showTime = () => {
const currentTime = new Date();
let h = currentTime.getHours();
let m = currentTime.getMinutes();
let s = currentTime.getSeconds();
clock.textContent = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;

}
setInterval(() => {
    showTime();
})



const modalWrapper = document.getElementById("Introduction");
const closeBtn = document.getElementById("CloseModal");

const closeModal = () => modalWrapper.classList.add("hideModal");
closeBtn.addEventListener('click',closeModal);