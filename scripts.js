const n0 = window.document.getElementById("0")
const n1 = window.document.getElementById("1")
const n2 = window.document.getElementById("2")
const n3 = window.document.getElementById("3")
const n4 = window.document.getElementById("4")
const n5 = window.document.getElementById("5")
const n6 = window.document.getElementById("6")
const n7 = window.document.getElementById("7")
const n8 = window.document.getElementById("8")
const n9 = window.document.getElementById("9")



var screen = window.document.getElementById("screen")

var screenNumbers = ""

n1.addEventListener("click", () => {
    screen.innerText = screenNumbers + '1'
    screenNumbers = screenNumbers + "1"
})
n2.addEventListener("click", () => {
    screen.innerText = screenNumbers + "2"
    screenNumbers = screenNumbers + "2"
})
n3.addEventListener("click", () => {
    screen.innerText = screenNumbers + "3"
    screenNumbers = screenNumbers + "3"
})
n4.addEventListener("click", () => {
    screen.innerText = screenNumbers + "4"
    screenNumbers = screenNumbers + "4"
})
n5.addEventListener("click", () => {
    screen.innerText = screenNumbers + "5"
    screenNumbers = screenNumbers + "5"
})
n6.addEventListener("click", () => {
    screen.innerText = screenNumbers + "6"
    screenNumbers = screenNumbers + "6"
})
n7.addEventListener("click", () => {
    screen.innerText = screenNumbers + "7"
    screenNumbers = screenNumbers + "7"
})
n8.addEventListener("click", () => {
    screen.innerText = screenNumbers + "8"
    screenNumbers = screenNumbers + "8"
})
n9.addEventListener("click", () => {
    screen.innerText = screenNumbers + "9"
    screenNumbers = screenNumbers + "9"
})

n0.addEventListener("click", () => {
    screen.innerText = screenNumbers + "0"
    screenNumbers = screenNumbers + "0"
})

ponto.addEventListener("click", () => {
    screen.innerText = screenNumbers + "."
    screenNumbers = screenNumbers + "."
})