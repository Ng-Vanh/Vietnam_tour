// Show menu when "click"

var listIconElement = document.querySelector('.navbar__list-icon')
var menuMbTlElement = document.querySelector('.navbar__mbtl-list')

const navbarItems = document.querySelectorAll('.navbar__item');
const navbarItemsArray = Array.from(navbarItems);


//Click navigation
navbarItemsArray.forEach(function(item) {
    item.addEventListener('click', function() {
        navbarItemsArray.forEach(function(newItem) {
            newItem.querySelector('.navbar__item-link').classList.remove('navbar__item-active');
        });

        item.querySelector('.navbar__item-link').classList.add('navbar__item-active');
    });
});



// tablet
listIconElement.addEventListener('click', function(){
    menuMbTlElement.classList.toggle("show-on-tablet-mobile")
})

// click next-previous button
var nextCardElement = document.querySelector('.next__page')
var destinationCardWrapElement = document.querySelector('.destinations__card-wrap')

nextCardElement.addEventListener('click', function(){
    const scrollAmount = 240;
    destinationCardWrapElement.scrollLeft +=scrollAmount;
})

var previousCardElement = document.querySelector('.previous__page')

previousCardElement.addEventListener('click', function(){
    const scrollAmount = 240;
    destinationCardWrapElement.scrollLeft -=scrollAmount;
})


// Login___ Sign up

var loginElement = document.querySelector(".login")
var registerElement = document.querySelector(".register")


var loginMbtl = document.querySelector(".login-mbtl")
var registerMbtl = document.querySelector(".register-mbtl")

var overlayEle = document.querySelector(".overlay")

var modalEle = document.querySelector(".modal")
var modalLogin = document.querySelector(".form__login")
var modalRegister = document.querySelector(".form__register")

var closeBtn = document.querySelectorAll(".modal__close-btn")


loginMbtl.addEventListener("click", function(){
    modalEle.style.display = 'block';
    modalLogin.style.display = 'block';
})
registerMbtl.addEventListener("click", function(){
    modalEle.style.display = 'block';
    modalRegister.style.display = 'block';
})


loginElement.addEventListener("click", function(){
    modalEle.style.display = 'block';
    modalLogin.style.display = 'block';
})
registerElement.addEventListener("click", function(){
    modalEle.style.display = 'block';
    modalRegister.style.display = 'block';
})

overlayEle.addEventListener("click",function(){
    modalEle.style.display = 'none';
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'none';
})



for(let i = 0; i<2; i++){
    closeBtn[i].addEventListener("click",function(){
        modalEle.style.display = 'none';
        modalLogin.style.display = 'none';
        modalRegister.style.display = 'none';
    })
}

