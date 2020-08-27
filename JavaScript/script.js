const level = document.querySelector(".difficulty");
const gameEasy = document.querySelector(".game-easy");
const gameHard = document.querySelector(".game-hard");
const header = document.querySelector(".header");
const newcColorBtn=document.querySelector(".new");
const colors = document.querySelectorAll("span");

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
    }
    else if(event.target.textContent === "Hard"){

        //Changing the difficulty level background on click
        event.target.classList.add("onButtonClick");
        event.target.previousElementSibling.classList.remove("onButtonClick");

        //Changing the number of squares visible
        gameEasy.classList.add("inactive");
        gameHard.classList.remove("inactive");

        easy=false;
    }
});


/*Adding Event Listener To The New Color Button*/
newcColorBtn.addEventListener("click",()=>{
    randomColor();
    headerRGBChange();
});

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



/*Changing the color for the header*/
function headerColorChange(){
    header.style.background = `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`;
}


//When "New Color" is clicked RGB value changes
//If wrong coloured box is chosen - "STATUS" shows try again otherwise it is not visible