// hide preloader
// all the images scripts  links have finished loading



eventListeners();

function eventListeners() {

    const ui = new UI();

    // window event list

    window.addEventListener('load', function () {

        ui.hidePreLoader();

    })

    //nav btn
    document.querySelector('.navBtn').addEventListener('click', function () {

       ui.showNav();
    })
}

// constructor function

function UI() {
    
}

UI.prototype.hidePreLoader = function() {
    document.querySelector('.preloader').style.display = 'none';
}

UI.prototype.showNav = function() {
    document.querySelector('.nav').classList.toggle('nav--show');
}






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

