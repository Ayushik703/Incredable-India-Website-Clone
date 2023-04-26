
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
        if (s == -1) {
            s = 2
            i.style.left = '-720px'
        }
    }
}
