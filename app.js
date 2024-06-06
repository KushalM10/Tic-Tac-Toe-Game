let boxes = document.querySelectorAll(".box");       //access the buttons
let reestbtn = document.querySelector(".resetbtn");  // access resetbutton
let newGame = document.querySelector(".new-btn");    // access newGamebutton
let msgdisplay = document.querySelector(".msg");     // msg display content 
let message = document.querySelector("#mess");       //paragraph

let turnO = true;// playerO ,playerX

const wintrack = [               //way of winning 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO) {                 //work on button
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;       // button not clicked again
        checkwinner();
    })
})
const disbox = () =>{              //disable boxes when the winner got 
    for(box of boxes){
        box.disabled =true;
    }
}
const enableBoxesbox = () =>{     // enable when the game complete
    for(box of boxes){
        box.disabled =false;
        box.innerText="";
        msgdisplay.classList.add("hide");
    }
}


const showWinner =(Winner)=>{       //as there it's show the winner text.
    message.innerText = `Congratulations, You are the winner ${Winner} `;
    msgdisplay.classList.remove("hide");
    disbox();
}
// const showdraw =(Winner)=>{
//     message.innerText = `No one won thw game!!! ${Winner} `;
//     msgdisplay.classList.remove("hide");
//     disbox();
// }
const checkwinner = () => {                        //its check the each boxes if position value is match with another 3 position .
    for(pattern of wintrack){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1===posval2 && posval2===posval3){
                showWinner(posval1);
            }//else{
            //     showdraw("");
            // }
        }
    }
}

const resetbtn = () => {              //reset button.
turnO=true;
 enableBoxesbox();
}

newGame.addEventListener("click", resetbtn);              //for the button giving some events
reestbtn.addEventListener("click",resetbtn);