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

    // control the video

    document.querySelector('.video__switch').addEventListener('click', function() {

        ui.videoControls();
    })
}

// constructor function

function UI() {
    
}

// hide preloader
UI.prototype.hidePreLoader = function() {
    document.querySelector('.preloader').style.display = 'none';
}

// show Nav
UI.prototype.showNav = function() {
    document.querySelector('.nav').classList.toggle('nav--show');
}


// play/pause the video

UI.prototype.videoControls = function() {

    let btn = document.querySelector('.video__switch-btn');

    if(!btn.classList.contains('btnSlide')) {
        btn.classList.add('btnSlide');
        document.querySelector('.video__item').pause()
    } else {
        btn.classList.remove('btnSlide');
        document.querySelector('.video__item').play()
    }
   
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

