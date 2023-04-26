let more = document.querySelector('#more')
let less = document.querySelector('#less')
let para = document.querySelector('.hiddenPara')
let image = document.querySelector('#image')

more.addEventListener('click', () => {
    para.style.display = "block"
    more.style.display = "none"
    less.style.display = "block"
    image.style.top = '482%'
})

less.addEventListener('click', () => {
    para.style.display = "none"
    more.style.display = "block"
    less.style.display = "none"
    image.style.top = '143%'
})



// <!-- ------------------------------------------------------------------------------------------------ -->

// <!-- -----------------------------------------Slider----------------------------------------------- -->


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
        if(s == 3){
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
        if(s == 3){
            i.style.left = '-1080px'
        }
        if (s == -1) {
            s = 3
            i.style.left = '-1080px'
        }
    }
}
