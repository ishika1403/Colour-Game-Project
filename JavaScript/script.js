// Difficutlty level background changes on click
let level = document.querySelector(".difficulty");
let easy = false;
let gameEasy = document.querySelector(".game-easy");
let gameHard = document.querySelector(".game-hard");

level.addEventListener("click",function(event){
    // alert("Event heard");
    if(event.target.textContent === "Easy")
    {
        event.target.classList.add("onButtonClick");
        event.target.nextElementSibling.classList.remove("onButtonClick");
        gameHard.classList.add("inactive");
        gameEasy.classList.remove("inactive");
        easy=true;
    }
    else if(event.target.textContent === "Hard")
    {
        event.target.classList.add("onButtonClick");
        event.target.previousElementSibling.classList.remove("onButtonClick");
        gameEasy.classList.add("inactive");
        gameHard.classList.remove("inactive");
        easy=false;
    }
});

// Number of squares to choose from will be changed

//When "New Color" is clicked RGB value changes
//If wrong coloured box is chosen - "STATUS" shows try again otherwise it is not visible