const seeBtn = document.querySelector("#see-more");
const hiddenText = document.querySelector(".hidden-text");
const singleSlides = document.querySelectorAll(".single-slide");
const mainSlider = document.querySelector(".main-slider");
const btns = document.querySelectorAll(".nav-list ul li a");
const underlineSlide = document.querySelector(".underline-slide")
const navBtn = document.querySelector("#navbar .nav-btn");
const dropdownBtn = document.querySelector(".bar .dropdown-btn i")
const pageOption = document.querySelector(".page-option-bottom");
const bodyPage = document.querySelector(".body");
const pageBackground = document.querySelector(".page-option-background");
const pageOptionCloseBtn = document.querySelector(".page-option-bottom .close-btn i");
const dropdownPage = document.querySelector(".dropdown-page");
const dropdownPageCloseBtn = document.querySelector(".dropdown-page .close-btn i");
const postBtns = document.querySelectorAll(".btn-class button");
const innerBox = document.querySelector(".inner-box");
const noPostBox = document.querySelector(".single-slide .no-post-box");

let counter = 0;


postBtns.forEach(function(btn,i){
    btn.addEventListener("click",function(){
        btn.style.backgroundColor = "#777";
        btn.style.color = "#fff";
        postBtns.forEach(function(item,index){
            if(index!=i){
                postBtns[index].style.backgroundColor = " rgb(226, 226, 226)";
                postBtns[index].style.color = "#666";
            }
        })
        showPost(btn);
    });
})


function showPost(btn){
    hiddenText.style.display = "none";
    hiddenText.style.height = "0";
    seeBtn.style.display = "inline";
     if(!(btn.textContent == "All")){
         innerBox.style.display = "none";
         noPostBox.style.display = "flex";
     }
     else if(btn.textContent == "All"){
        noPostBox.style.display = "none";
        innerBox.style.display = "flex";
     }
}

seeBtn.addEventListener("click",function(e){
    e.preventDefault();
    hiddenText.style.display = "block";
    hiddenText.style.height = "fit-content";
    seeBtn.style.display = "none";
})


singleSlides.forEach(function(item,index){
     item.style.left = `${index*100}%`;
});


btns.forEach(function(btn,index){
  
   
       btn.addEventListener("click",function(e){
        counter = index;
           e.preventDefault();
           corousel();
       })
});

function corousel(){
    hiddenText.style.display = "none";
    hiddenText.style.height = "0";
    seeBtn.style.display = "inline";
    underlineSlide.style.transform = `translateX(${counter * 100}%)`
    singleSlides.forEach(function(slide){
          slide.style.transform = `translateX(-${counter * 100}%)`
    })
}


navBtn.addEventListener("click",function(){
    pageOption.classList.toggle("toggle");
    pageBackground.style.display = "block";
})

pageOptionCloseBtn.addEventListener("click",function() {
    pageOption.classList.toggle("toggle");
    pageBackground.style.display = "none";
})


dropdownBtn.addEventListener("click",function(){
    dropdownPage.classList.toggle("toggle");
    pageBackground.style.display = "block";
})


dropdownPageCloseBtn.addEventListener("click",function(){
    dropdownPage.classList.toggle("toggle");
    pageBackground.style.display = "none";
})

