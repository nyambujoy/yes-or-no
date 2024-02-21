const GameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        let boardEl = ""
        gameBoard.forEach((square, index) => {
            boardEl += `<div class="square" id="square-${index}" > ${square}</div>`
        })

        document.querySelector(".squares").innerHTML = boardEl;
        const cards = document.querySelectorAll(".square")
        cards.forEach(card => {
            card.addEventListener("click", Game.handleClick)
        })


    }

    const update = (index, value) => {
        gameBoard[index] = value;
        render()

    }

    return {
        render,
        update,
    }
})()


const createPlayer = (name, marker) => {
    return {
        name,
        marker
    }
}


const Game = (() => {
    let players = []
    let currentPlayerIndex;
    let gameOver;
    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ]
        currentPlayerIndex = 0
        gameOver = false
        GameBoard.render()


    }

    const handleClick = (event) => {

        let index = parseInt(event.target.id.split("-")[1])
        GameBoard.update(index, players[currentPlayerIndex].marker);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0
    }
    return {
        start,
        handleClick
    }
})()


const startBtn = document.querySelector(".start")
startBtn.addEventListener("click", () => {
    Game.start()
})


