const slides = document.querySelectorAll('.slide');

const timings = [
    42000,
    15000,
    4000
];

let currentSlide = 0;

function rotateSlides(){

    setTimeout(()=>{

        slides[currentSlide].classList.remove('active');

        currentSlide++;

        if(currentSlide >= slides.length)
            currentSlide = 0;

        slides[currentSlide].classList.add('active');

        rotateSlides();

    }, timings[currentSlide]);

}

rotateSlides();