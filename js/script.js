const spans = document.querySelectorAll("h1 span")
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const androidBar = document.querySelector('.bar-android')
const unityBar = document.querySelector('.bar-unity')
const htmlBar = document.querySelector('.bar-html')
const designBar = document.querySelector('.bar-design')

var t1 = new TimelineLite()

t1.fromTo(androidBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(70% - 6px)` , ease: Power4.easeOut})
    .fromTo(unityBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(60% - 6px)` , ease: Power4.easeOut})
    .fromTo(htmlBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(50% - 6px)` , ease: Power4.easeOut})
    .fromTo(designBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)` , ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0.25
})
    .setTween(t1)
    .addTo(controller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for (i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}
