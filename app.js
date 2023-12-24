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


  
  scrollLeft.addEventListener('click', function(){
    expertiseScrollUI.scrollLeft -= 40;
    scrollLeft.style.background = "var(--Brand-Primary)";
    scrollLeft.style.color =  "var(--Base-White)";

    scrollRight.style.background =  "var(--Base-White)";
    scrollRight.style.color = "var(--Brand-Primary)";
  });
  
  
  
  scrollRight.addEventListener('click', function(){
    
    expertiseScrollUI.scrollLeft += 40;
    scrollRight.style.background = "var(--Brand-Primary)";
    scrollRight.style.color =  "var(--Base-White)";

    scrollLeft.style.background =  "var(--Base-White)";
    scrollLeft.style.color = "var(--Brand-Primary)";
    
  });


  // INSIGHTS SCROLLING

  const imgDiv = document.querySelector('.img-div');
  const img = document.querySelector('.insightsImg');
  const insightRightUI = document.querySelector('.insightRight');
  const insightLeftUI = document.querySelector('.insightLeft');
  const increaseNumUI = document.querySelector('#increaseNum');
  console.log(increaseNumUI)

  const imgSrc = [
    "https://s3-alpha-sig.figma.com/img/12dc/7aee/f3409b5aed1d84de6c851373d83e37e4?Expires=1704067200&Signature=m8C7V13g751n2A8~VfoJCdOOFc63r9uDB2JAuvfsmw9Ltq6faye9053mh1-LMYqjma6lu6pmUJ50ueM00SAZpyFgfVnoDEJtb96tKvEoMgFLkloDAS6tXiSk-6xqJoQra90F~JePA4GXGf1ApbsUHACvLzCWvnxC1xt2z-ql1~66fzuQ-8ppjcf2Lzdl9gAHSptwj8WByp3dMbNTI8hn7tK79l~7jlhwcgUeGiQCni-9ywMPIEOb8rJvZNCmu2Pkrp~7OWJlqYsSAakqj7LAWpu6m7UDn7j1kTs1rRzOXXGecaFPE6Hbvq6RLZMr5Xs5TMX9bDmOCwX~bGHoR8iTeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", 
  
    "https://images.unsplash.com/photo-1702933017536-44e01bff1111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  
  console.log(insightLeftUI, insightRightUI)

  let id = 0;
  let imgIndexIncrease = 0;

function slide(id){
  imgDiv.classList.add('image-fade');

  setTimeout(() => {
    imgDiv.classList.remove('image-fade');
  }, 500)

  img.src = imgSrc[id];
  
 
}


insightLeftUI.addEventListener('click', () => {
  id--;
  imgIndexIncrease--;
  if(imgIndexIncrease < 0){
     increaseNumUI.textContent = imgSrc.length;
  }

  
  if(id<0){
    id = imgSrc.length -1;
    
    
  }
  slide(id);
})


insightRightUI.addEventListener('click', () => {
  console.log('clicked')
  id++;
  increaseNumUI.textContent = id++;


  if(id>imgSrc.length - 1){
    id = 0;
    increaseNumUI.textContent = 1;
  }
  slide(id);
})

 





