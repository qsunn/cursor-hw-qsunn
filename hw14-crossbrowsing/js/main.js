const prev = document.querySelector('.arrow-left')
const next = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slide')

let index = 0

const activeSlide = n => {
    for (const slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        activeSlide(index)
    } else {
        index--
        activeSlide(index)
    }
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0
        activeSlide(index)
    } else {
        index++
        activeSlide(index)
    }
}

const stopInterval = () => {
    clearInterval(interval)
}

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)
next.addEventListener('click', stopInterval)
prev.addEventListener('click', stopInterval)

document.addEventListener('keydown',
event => {
        if (event.key === 'ArrowRight') {
        nextSlide()
        } else if (event.key === 'ArrowLeft') {
        prevSlide()
    }
})

const interval = setInterval(() => {
    nextSlide()
}, 2400)

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}




var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
    });
}