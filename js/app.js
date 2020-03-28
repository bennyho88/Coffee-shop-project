// hide preloader
// all the images scripts  links have finished loading


// window event list


window.addEventListener('load', function() {

    document.querySelector('.preloader').style.display = 'none';

})

//nav btn

document.querySelector('.navBtn').addEventListener('click', function() {

   /* document.querySelector('.nav').classList.toggle('nav--show') */
   document.querySelector('.nav').classList.toggle('nav--show');
})



/*
document.addEventListener('DOMContentLoaded', function() {

   

    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        
    }, 2000)


    document.querySelector('.navBtn').addEventListener('click', function() {
        
        
        document.querySelector('.nav').classList.toggle('nav__btn');
        console.log('it works')
   
})

})
*/

