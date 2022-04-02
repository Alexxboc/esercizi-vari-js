/* Menu Hamburger */
const elementHamburgerButton = document.querySelector('.hamburger')

const elementMainMenu = document.querySelector('.main_menu')

elementHamburgerButton.addEventListener('click', function(){
    console.log('click');
    elementMainMenu.classList.toggle('mobile_nav')
    document.querySelector('.hamburger > i').classList.toggle('fa-bars')
    document.querySelector('.hamburger > i').classList.toggle('fa-times')
    
});