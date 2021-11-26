const prev = document.querySelector('.carousel__button--prev')
const next = document.querySelector('.carousel__button--next')
const container = document.querySelector('.carousel__item')

let atual = 0

const imgs = [
    {img: 'https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg'},
    {img: 'https://i.pinimg.com/originals/94/de/53/94de53c3f404ebe864529da9d7e5504a.jpg'},
    {img: 'https://i.pinimg.com/originals/34/2c/40/342c401ce868bd2ba8e012fe912d247d.jpg'},
    {img: 'https://i.pinimg.com/736x/9a/9c/51/9a9c5155495858677fee20136cb82c96.jpg'},
    {img: 'https://64.media.tumblr.com/c5a537f8f7ac9ea98597fe7cf1317026/77d94519ee6d4cbd-b9/s1280x1920/46e0c8da47d428bc3722933484175e76187062b5.jpg'},
    {img: 'https://i.pinimg.com/564x/92/a4/c4/92a4c4d9da9099a4b8fcaeace3678596.jpg'}
]


function addDom() {
    if (atual === imgs.length) {
        atual = 0
    }

    container.innerHTML = `
    <img src="${imgs[atual].img}" />
    `
}

addDom()

next.addEventListener('click', () => {
    atual++
    addDom()
})

prev.addEventListener('click', () => {
    if (atual === 0) {
        atual = imgs.length
    }
    atual--
    addDom()
})