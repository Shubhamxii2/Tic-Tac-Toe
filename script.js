let reset = document.querySelector("#reset");
let boxes = document.querySelectorAll(".box");
let main = document.querySelector(".main");
let newGame = document.querySelector(".newGame");
let win = document.querySelector(".win");
let msg = document.querySelector("#msg");
let turn0 = true;
let winnings = [[0, 1, 2],[0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 4, 6],[2, 5, 8],[3, 4, 5],[6, 7, 8]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Ensure box is empty before changing text
            if (turn0) {
                box.innerText = "O";
                console.log("You are player 1");
                turn0 = false;
            } else {
                box.innerText = "X";
                console.log("You are player 2");
                turn0 = true;
            }
            winChecker();
        }
        
    });
});
reset.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText = "";
        turn0 = true;
        console.clear();
    });
});
newGame.addEventListener("click",() =>{
    
    win.classList.remove("hide");
    reset.classList.remove("hide");
    // main.classList.remove("hide");
    win.classList.remove("show");
    win.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
        turn0 = true;
        console.clear();
    });
} )
const winChecker = () =>{
    for(let winPattern of winnings){
        let pos0 = boxes[winPattern[0]].innerText;
        let pos1 = boxes[winPattern[1]].innerText;
        let pos2 = boxes[winPattern[2]].innerText;
        if(pos0!= "" && pos1!= "" && pos2!= ""){
            if(pos1 === pos2 && pos2 === pos0){
                console.log("Winner"+ pos0) ;
                win.classList.add("show");
                msg.innerHTML= `Winner ${pos0}`;
                reset.classList.add("hide");
                // main.classList.add("hide");

            }
        }
    }
}