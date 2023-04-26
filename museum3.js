
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
        // if (slideMe == 6) {
        //     i.style.left = '-2160px'
        // }
        if (slideMe == 6) {
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
        // if (slideMe == 5) {
        //     i.style.left = '-1790px'
        // }
        // if (slideMe == 6) {
        //     i.style.left = '-2160px'
        // }
        if (slideMe == -1) {
            slideMe = 5
            i.style.left = '-1790px'
        }
    }
}