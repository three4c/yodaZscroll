let scrollElm = (function () {
    if ('scrollingElement' in document) {
        return document.scrollingElement;
    }
    if (navigator.userAgent.indexOf('WebKit') != -1) {
        return document.body;
    }
    return document.documentElement;
})();

let containerInner = document.querySelector('.container__inner');
let sectionContents = document.querySelectorAll('.section__contents');
let scroll = document.getElementById('scroll');

for (let i = 0; i < sectionContents.length; i++) {
    let itemZ = sectionContents[i].getAttribute('data-z');
    sectionContents[i].style.transform = 'translateZ(' + -itemZ + 'px)';

    if (i == sectionContents.length - 1) {
        scroll.style.height = itemZ * 100 + window.innerHeight + 'px';
    }
}

window.addEventListener('scroll', function () {
    containerInner.style.transform = 'translateZ(' + scrollElm.scrollTop / 100 + 'px)';
    sectionContents[1].style.opacity = 0.5 + scrollElm.scrollTop / 300;
    sectionContents[2].style.opacity = 0.3 + scrollElm.scrollTop / 600;
    sectionContents[3].style.opacity = 0.1 + scrollElm.scrollTop / 900;
    sectionContents[4].style.opacity = scrollElm.scrollTop / 1200;
    sectionContents[5].style.opacity = scrollElm.scrollTop / 1500;
});