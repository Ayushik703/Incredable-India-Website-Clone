// <!-- ---------------------------------------Paragraph------------------------------------------------ -->

let para = document.querySelector('.hide')
let show = document.querySelector('#more')
let hide = document.querySelector('#less')

show.addEventListener('click', () => {
    para.style.display = "block"
    show.style.display = "none"
    hide.style.display = "block"
})

hide.addEventListener('click', () => {
    para.style.display = "none"
    show.style.display = "block"
    hide.style.display = "none"
})

// <!-- ------------------------------------------------------------------------------------------------ -->

// <!-- ----------------------------------------Slider 1------------------------------------------------ -->

const body = document.querySelector('.body')
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSlide = 0
rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide >= slides.length) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}


// <!-- ------------------------------------------------------------------------------------------------ -->

// <!-- -------------------------------------About Populars--------------------------------------------- -->

// let unityBtn = document.querySelector('#unityBtn')
// let tajBtn = document.querySelector('#tajBtn')
// let museumBtn = document.querySelector('#museumBtn')
// let fortBtn = document.querySelector('#fortBtn')
// let gandhiBtn = document.querySelector('#gandhiBtn')

// unityBtn.addEventListener('click', () => {
//     location.href = 'http://127.0.0.1:5500/unity.html'
// })
// tajBtn.addEventListener('click', () => {
//     location.href = 'http://127.0.0.1:5500/taj.html'
// })
// museumBtn.addEventListener('click', () => {
//     location.href = 'http://127.0.0.1:5500/museum.html'
// })
// fortBtn.addEventListener('click', () => {
//     location.href = 'http://127.0.0.1:5500/fort.html'
// })
// gandhiBtn.addEventListener('click', () => {
//     location.href = 'http://127.0.0.1:5500/gandhi.html'
// })

// <!-- ------------------------------------------------------------------------------------------------ -->

// <!-- -----------------------------------------Slider 2----------------------------------------------- -->

let goNext = document.querySelector('#goNext')
let goPrev = document.querySelector('#goPrev')
let divClass = document.querySelectorAll('.div-class')
slideMe = 0

goNext.onclick = () => {
    slideMe++
    for (let i of divClass) {
        if (slideMe == 0) {
            i.style.left = '0px'
        }
        if (slideMe == 1) {
            i.style.left = '-360px'
        }
        if (slideMe == 2) {
            i.style.left = '-720px'
        }
        if (slideMe == 3) {
            i.style.left = '-1080px'
        }
        if (slideMe == 4) {
            i.style.left = '-1440px'
        }
        if (slideMe == 5) {
            i.style.left = '-1790px'
        }
        if (slideMe == 6) {
            i.style.left = '-2160px'
        }
        if (slideMe == 7) {
            slideMe = 0
            i.style.left = '0px'
        }
    }
}
goPrev.onclick = () => {
    slideMe--
    for (let i of divClass) {
        if (slideMe == 0) {
            i.style.left = '0px'
        }
        if (slideMe == 1) {
            i.style.left = '-360px'
        }
        if (slideMe == 2) {
            i.style.left = '-720px'
        }
        if (slideMe == 3) {
            i.style.left = '-1080px'
        }
        if (slideMe == 4) {
            i.style.left = '-1440px'
        }
        if (slideMe == 5) {
            i.style.left = '-1790px'
        }
        if (slideMe == 6) {
            i.style.left = '-2160px'
        }
        if (slideMe == -1) {
            slideMe = 6
            i.style.left = '-2160px'
        }
    }
}
// <!-- ------------------------------------------------------------------------------------------------ -->

// <!-- -----------------------------------------Slider 3----------------------------------------------- -->

let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let div = document.querySelectorAll('.div-class')
s = 0

next.onclick = () => {
    s++
    for (let i of div) {
        if (s == 0) {
            i.style.left = '0px'
        }
        if (s == 1) {
            i.style.left = '-360px'
        }
        if (s == 2) {
            i.style.left = '-720px'
        }
        if (s == 3) {
            i.style.left = '-1080px'
        }
        if (s == 4) {
            s = 0
            i.style.left = '0px'
        }
    }
}
prev.onclick = () => {
    s--
    for (let i of div) {
        if (s == 0) {
            i.style.left = '0px'
        }
        if (s == 1) {
            i.style.left = '-360px'
        }
        if (s == 2) {
            i.style.left = '-720px'
        }
        if (s == 3) {
            i.style.left = '-1080px'
        }
        if (s == -1) {
            s = 3
            i.style.left = '-1080px'
        }
    }
}

// ==========================================================================================================

let incredeble = document.querySelector('.icrInd')
let special = document.querySelector('#special')

window.addEventListener('resize', () => {
    if (screen.width < 1300) {
        console.log('Less than 1300');
        incredeble.style.display = 'none'
        special.innerHTML = 'Please open this page on Laptop!'
    }
    else {
        console.log(screen);
        incredeble.style.display = 'block'
        special.innerHTML = ''
    }
})
