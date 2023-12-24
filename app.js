const menuUI = document.querySelector(".hambuger");

const dropDown = document.querySelector(".dropdown");

menuUI.addEventListener('click', function(){
  dropDown.classList.toggle('active')
});


// SCROLL BUTTONS

const expertiseScrollUI = document.querySelector(".scroll-container");
const scrollLeft = document.querySelector(".scrollBtnLeft");
const scrollRight = document.querySelector(".scrollBtnRight");
const scrollItemUI =document.querySelectorAll(".cards");

for(let i = 0; i < scrollItemUI.length; i++){
  console.log(scrollItemUI[i])
  
  scrollLeft.addEventListener('mousedown', function(){
    expertiseScrollUI.scrollLeft -= 40;
  });
  
  
  
  scrollRight.addEventListener('click', function(){
    console.log('click')
    // scrollItemUI[i].classList.add('scrollRight')
    expertiseScrollUI.scrollLeft += 40;
  });
}


