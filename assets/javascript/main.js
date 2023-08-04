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