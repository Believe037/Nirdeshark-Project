const menuUI = document.querySelector(".hambuger");
console.log(menuUI);

const dropDown = document.querySelector(".dropdown");

console.log(dropDown)
menuUI.addEventListener('click', function(){
  console.log('click')
  dropDown.classList.toggle('active')
})