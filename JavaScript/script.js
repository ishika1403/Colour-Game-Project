const level = document.querySelector(".difficulty");
const gameEasy = document.querySelector(".game-easy");
const gameHard = document.querySelector(".game-hard");
const header = document.querySelector(".header");
const newColorBtn=document.querySelector(".new");
const colors = document.querySelectorAll("span");
const boxEasy = document.querySelectorAll(".game-easy div");
const boxHard = document.querySelectorAll(".game-hard div");

let easyWinnerBox;
let hardWinnerBox;
let easy = false;
let colorObject = { red:29,
    green: 127,
    blue: 208
};

/*Adding Event Listener to the level selector div*/
level.addEventListener("click",function(event){
    if(event.target.textContent === "Easy"){

        //Changing the difficulty level background on click
        event.target.classList.add("onButtonClick");
        event.target.nextElementSibling.classList.remove("onButtonClick");

        //Changing the number of squares visible
        gameHard.classList.add("inactive");
        gameEasy.classList.remove("inactive");

        easy=true;

        newGame();
    }
    else if(event.target.textContent === "Hard"){

        //Changing the difficulty level background on click
        event.target.classList.add("onButtonClick");
        event.target.previousElementSibling.classList.remove("onButtonClick");

        //Changing the number of squares visible
        gameEasy.classList.add("inactive");
        gameHard.classList.remove("inactive");

        easy=false;

        newGame();
    }
});


/*Adding Event Listener to listen for the DOM Content being loaded */
window.addEventListener("DOMContentLoaded", newGame);

/*Adding Event Listener To The New Color Button*/
newColorBtn.addEventListener("click", newGame);

/*Function to assign new colors to the boxes*/
function newGame(){
    randomColor();
    headerRGBChange();

    if(easy === true){
        easyWinnerBox = randomNumber(0,3);
        boxEasy[easyWinnerBox].style.background = `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`;
        for(let i=0;i<boxEasy.length;i++){
            if(i!==easyWinnerBox){
                randomColor();
                boxEasy[i].style.background = `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`;
            }
        }
    }

    else if(easy === false){
        hardWinnerBox = randomNumber(0,6);
        boxHard[hardWinnerBox].style.background = `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`;
        for(let i=0;i<boxHard.length;i++){
            if(i!==hardWinnerBox){
                randomColor();
                boxHard[i].style.background = `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`;
            }
        }
    }

    header.style.background = "rgb(29, 127, 208)";
    masterReset();
}

/*Function to master reset every block*/
function masterReset(){
    for(let i=0;i<boxEasy.length;i++){
        boxEasy[i].style.pointerEvents = "auto";
        boxEasy[i].classList.remove("hiddenVisibility");
        }
    for(let i=0;i<boxHard.length;i++){
        boxHard[i].style.pointerEvents = "auto";
        boxHard[i].classList.remove("hiddenVisibility");
    }
    gameEasy.style.pointerEvents = "auto";
}

/*Adding function for generating random RGB color*/
function randomColor(){
    colorObject.red=randomNumber(0,255);
    colorObject.green=randomNumber(0,255);
    colorObject.blue=randomNumber(0,255);
}   

/*Generate a random number between 0 to 255*/
function randomNumber(max,min){
    return Math.floor(Math.random() * (max-min) + min);
}

/*Function to change the RGB value spans of the header*/
function headerRGBChange(){
    colors[0].textContent = colorObject.red;
    colors[1].textContent = colorObject.green;
    colors[2].textContent = colorObject.blue;
}

/*Adding event listener to easy level game*/
gameEasy.addEventListener("click",function(e){
    // console.dir(e.target);
    // console.log(e.target);
    if(!e.target.classList.contains("gameEasy")){
        //console.log("reached");
        if(e.target.parentElement.children[easyWinnerBox] === e.target){
            //Change the color of the header
            headerColorChange(e.target.style.background);
            //Make all the buttons visible and unclickable
            resetSiblings(e.target.parentElement,e.target.style.background);
        }
        else if(e.target.parentElement.children[easyWinnerBox] !== e.target){
            // console.log("Not successfull");
            e.target.classList.add("hiddenVisibility");
        }
    }
    
});

/*Adding event listener to hard level game*/
gameHard.addEventListener("click",function(e){
    if(!e.target.classList.contains("gameHard")){
        //console.log("reached");
        if(e.target.parentElement.children[hardWinnerBox] === e.target){
            //Change the color of the header
            headerColorChange(e.target.style.background);
            //Make all the buttons visible and unclickable
            resetSiblings(e.target.parentElement,e.target.style.background);
        }
        else if(e.target.parentElement.children[hardWinnerBox] !== e.target){
            // console.log("Not successfull");
            e.target.classList.add("hiddenVisibility");
        }
    }
});

/*Changing the color for the header*/
function headerColorChange(winColor){
    header.style.background = winColor;
}
/*Function to make all the siblings visible*/
function resetSiblings(parent,winColor){
    for(let i=0;i<parent.children.length;i++){
        if(parent.children[i].classList.contains("hiddenVisibility")){
            parent.children[i].classList.remove("hiddenVisibility");
            console.log("Removed");
        }
            

        parent.children[i].style.pointerEvents= "none";
        console.log("Reached pointerevent");
        parent.children[i].style.background = winColor;    
    }
    gameEasy.style.pointerEvents="none";
    gameHard.style.pointerEvents="none";
}