function back() {
    const bck = window.document.getElementById("back")
    bck.addEventListener("click", () => {
        screenNumbers = screenNumbers.slice(0, -1);
        screen.innerText = screenNumbers
    })
}

function ac() {
    const ac = window.document.getElementById("ac")
    ac.addEventListener("click", () => {
        screenNumbers = ""
        screen.innerText = ""
    })
}

function porcentagem() {
    const percent = window.document.getElementById("%")
    percent.addEventListener("click", () => {
        screen.innerText = screenNumbers + "%"
        screenNumbers = screenNumbers + "%"
    })
}

module.exports = back, ac, porcentagem