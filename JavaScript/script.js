// Difficutlty level background changes on click
let level = document.querySelector(".difficulty");
let easy = false;

level.addEventListener("click",function(event){
    // alert("Event heard");
    if(event.target.textContent === "Easy")
    {
        event.target.classList.add("onClick");
        event.target.nextElementSibling.classList.remove("onClick");
        easy=true;
    }
    else if(event.target.textContent === "Hard")
    {
        event.target.classList.add("onClick");
        event.target.previousElementSibling.classList.remove("onClick");
        easy=false;
    }
});

// Number of squares to choose from will be changed


//When "New Color" is clicked RGB value changes
//If wrong coloured box is chosen - "STATUS" shows try again otherwise it is not visible