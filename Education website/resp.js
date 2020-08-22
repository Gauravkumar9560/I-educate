burger = document.querySelector('.burger') //query selector is the method of the element interface. the query selector allows you to find the first element ,which is a desecendant of the parent element on which it is invoked.
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')
     
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-res');
    navlist.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
    


})
