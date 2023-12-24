const menuUI = document.querySelector(".hambuger");

const dropDown = document.querySelector(".dropdown");

menuUI.addEventListener('click', function(){
  dropDown.classList.toggle('active')
});


// SCROLL BUTTONS

const expertiseScrollUI = document.querySelector(".scroll-container");
const scrollLeft = document.querySelector(".scrollBtnLeft");
const scrollRight = document.querySelector(".scrollBtnRight");
console.log(scrollLeft);

scrollLeft.addEventListener('mousedown', function(){
 
  expertiseScrollUI .scrollLeft -= 20;
});

scrollRight.addEventListener('mousedown', function(){
  console.log('click')
  expertiseScrollUI.classList.add('scrollBtnActive')
  expertiseScrollUI .scrollLeft += 20;
});