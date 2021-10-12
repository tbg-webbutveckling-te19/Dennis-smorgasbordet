var leftArrow = document.querySelector(".leftArrow");
var rightArrow = document.querySelector(".rightArrow");
var cardParent = document.querySelector(".card-parent");
var body = document.getElementsByTagName("body")[0];
var scroll = 0;

leftArrow.addEventListener("click", function() {
    scroll += -100;
    cardParent.style.transform = `translateX(${scroll}px)`;
    if(scroll < -1000) {
        cardParent.style.transform = `translateX(0px)`;
        scroll = 0;
    }
})
rightArrow.addEventListener("click", function() {
    scroll += 100;
    cardParent.style.transform = `translateX(${scroll}px)`;
    if(scroll > 1000) {
        cardParent.style.transform = `translateX(0px)`;
        scroll = 0;
    }
})