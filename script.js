let resetBtn = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let hide = document.querySelector(".hide");
let turnX = true; //true for X and false for O
let count = 0;
let gameWon = false;
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// when the user clicks the box 
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (gameWon) return 0;
        console.log("box was clicked");
        if (box.innerText == "") {
            if (turnX) {
                box.innerText = "X";
                box.style.color = "blue";
                turnX = false;
            }
            else {
                box.innerText = "O";
                box.style.color = "red";
                turnX = true;
            }
        }
       
        winningCombos.forEach((e) => {
            let box1 = boxes[e[0]];
            let box2 = boxes[e[1]];
            let box3 = boxes[e[2]];
            if(box1.innerText != "" && box1.innerText == box2.innerText && box2.innerText == box3.innerText){
                if (box1.innerText == box2.innerText && box2.innerText == box3.innerText) {
                    gameWon = true;
                
                if(box1.innerText == "X"){
                    hide.innerText = "X wins!";
                }
                else if(box1.innerText == "O"){
                    hide.innerText = "O wins!";
                }
            }
        }
        })
        if(!gameWon){
            count++;
            if(count == 9){
                hide.innerText = "It's a tie!";
            }
        }
     box.disabled = true;
    })
}

// when the user clicks the reset button

resetBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    hide.innerText = "";
    count = 0;
    turnX = true;
    gameWon = false;
});

