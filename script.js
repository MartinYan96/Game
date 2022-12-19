let gameArea = document.querySelector('.gameArea');
let button = document.querySelectorAll('.button')
let scoreX = document.querySelector('.scoreX')
let scoreO = document.querySelector('.scoreO')
let newGameButton = document.querySelector('.newGameButton');
let stepX = false
let step = 0
let player1
let player2
let player1Score = JSON.parse(localStorage.getItem("winX"))
let player2Score = JSON.parse(localStorage.getItem("winO"))
if (player1Score > 0) {
    scoreX.innerText = "X = " + player1Score
}
if (player2Score > 0) {
    scoreO.innerText = "O = " + player2Score
}

button.forEach((el, ind, button) => {
    el.onclick = () => {
        step++
        if (stepX === false) {
            stepX = true
            el.innerText = "X"
            el.style.textShadow = "0 0 2px rgb(21, 101, 192) , 0 0 4px rgb(45, 118, 201) , 0 0 6px rgb(85, 130, 180) ,0 0 8px rgb(114, 154, 201) , 0 0 10px rgb(159, 184, 212)"
            el.classList.toggle("x")
            if (button[0].classList.contains("x") && button[1].classList.contains("x") && button[2].classList.contains("x") ||
                button[3].classList.contains("x") && button[4].classList.contains("x") && button[5].classList.contains("x") ||
                button[6].classList.contains("x") && button[7].classList.contains("x") && button[8].classList.contains("x") ||
                button[0].classList.contains("x") && button[3].classList.contains("x") && button[6].classList.contains("x") ||
                button[1].classList.contains("x") && button[4].classList.contains("x") && button[7].classList.contains("x") ||
                button[2].classList.contains("x") && button[5].classList.contains("x") && button[8].classList.contains("x") ||
                button[0].classList.contains("x") && button[4].classList.contains("x") && button[8].classList.contains("x") ||
                button[2].classList.contains("x") && button[4].classList.contains("x") && button[6].classList.contains("x")
            ) {
                player1 = localStorage.getItem("winX")
                player1++
                localStorage.setItem("winX", `${player1}`)
                setTimeout(() => {
                    alert("Winner Player1")
                    window.location.reload(true)

                }, 100)


            }
            if (el.classList.contains("x")) {
                el.onclick = () => null;
            }
        }

        else if (stepX === true) {
            stepX = false
            el.innerText = "O"
            el.style.textShadow = ""
            el.classList.toggle("o")
            if (button[0].classList.contains("o") && button[1].classList.contains("o") && button[2].classList.contains("o") ||
                button[3].classList.contains("o") && button[4].classList.contains("o") && button[5].classList.contains("o") ||
                button[6].classList.contains("o") && button[7].classList.contains("o") && button[8].classList.contains("o") ||
                button[0].classList.contains("o") && button[3].classList.contains("o") && button[6].classList.contains("o") ||
                button[1].classList.contains("o") && button[4].classList.contains("o") && button[7].classList.contains("o") ||
                button[2].classList.contains("o") && button[5].classList.contains("o") && button[8].classList.contains("o") ||
                button[0].classList.contains("o") && button[4].classList.contains("o") && button[8].classList.contains("o") ||
                button[2].classList.contains("o") && button[4].classList.contains("o") && button[6].classList.contains("o")
            ) {
                player2 = localStorage.getItem("winO")
                player2++
                localStorage.setItem("winO", `${player2}`)
                setTimeout(() => {
                    alert("Winner Player2")
                    window.location.reload(true)

                }, 100)
            }
            if (el.classList.contains("o")) {
                el.onclick = () => null;
            }
        }
        console.log(stepX)
        if (step === 9) {
            setTimeout(() => {
                window.location.reload(true)
            } ,500)
        }
    }
})
newGameButton.addEventListener("click", () => {
    localStorage.clear()
    window.location.reload(true)

})