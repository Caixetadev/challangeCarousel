const prev = document.querySelector('.carousel__button--prev')
const next = document.querySelector('.carousel__button--next')
const container = document.querySelector('.carousel__item')

let atual = 0

const imgs = [
    {
        img: 'https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg'
    },
    {
        img: 'https://i.pinimg.com/originals/94/de/53/94de53c3f404ebe864529da9d7e5504a.jpg'
    },
    {
        img: 'https://i.pinimg.com/originals/34/2c/40/342c401ce868bd2ba8e012fe912d247d.jpg'
    }
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