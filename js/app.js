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

    //submit the form

    document.querySelector('.drink-form').addEventListener('submit', function(event) {

        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastName, email);

        if(value) {
            ui.showFeedback('customer added to the list', 'success');
        } else {
            ui.showFeedback('some form values empty', 'error');
        }
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

UI.prototype.checkEmpty = function(name, lastName, email) {

    let result;

    if(name === '' || lastName === '' || email === '') {
        result = false;
    } else {
        result = true;
    }

    return result;
}

UI.prototype.showFeedback = function(text, type) {

    
    if(type === 'success') {
        
        let feedback = document.querySelector('.drink-form__feedback');
        feedback.classList.add('success');
        feedback.innerText= text;
        this.removeAlert('success');

    } else if (type === 'error') {

        let feedback = document.querySelector('.drink-form__feedback');
        feedback.classList.add('error');
        feedback.innerText= text;
        this.removeAlert('error');
    }
}

UI.prototype.removeAlert = function(type) {

    setTimeout(function() {
        document.querySelector('.drink-form__feedback').classList.remove(type);
    }, 3000)
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

