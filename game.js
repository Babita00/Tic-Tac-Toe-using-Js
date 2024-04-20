let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turn0 = true;
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let count = 0;

let boxesArray = Array.from(boxes);// to Convert HTMLCollection to array


boxesArray.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 == true) {
            box.innerText = "O";
            turn0 = false;
            // box.disabled = true;
        }
        else {
            box.innerText = "X";
            turn0 = true;
            // box.disabled = true;
        }
        box.disabled = true;
        count++;
        // console.log(count);
        let iswinner = checkWinner();//function call

        if (count === 9 && !iswinner) {
            gameDraw();

        }
    })


})
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableeBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () => {
    for (let patterns of winningPattern) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner", pos1val)
                showWinner(pos1val);
            }
        }
    }

};

const newGame = () => {
    turn0: true;
    enableeBoxes();
    count = 0;
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click", newGame)
resetBtn.addEventListener("click", newGame)


