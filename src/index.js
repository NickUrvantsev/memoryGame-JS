document.addEventListener("DOMContentLoaded",() => {

    const cards = [
        {
            name:"fries",
            img:"src/images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"src/images/cheeseburger.png"
        },
        {
            name:"hotdog",
            img:"src/images/hotdog.png"
        },
        {
            name:"ice-cream",
            img:"src/images/ice-cream.png"
        },
        {
            name:"milkshake",
            img:"src/images/milkshake.png"
        },
        {
            name:"pizza",
            img:"src/images/pizza.png"
        },
        {
            name:"fries",
            img:"src/images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"src/images/cheeseburger.png"
        },
        {
            name:"hotdog",
            img:"src/images/hotdog.png"
        },
        {
            name:"ice-cream",
            img:"src/images/ice-cream.png"
        },
        {
            name:"milkshake",
            img:"src/images/milkshake.png"
        },
        {
            name:"pizza",
            img:"src/images/pizza.png"
        }
    ]
    cards.sort(() => 0.5-Math.random());
    console.log(cards)

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = [];//Names
    let cardsChosenIds = [];//Ids
    let cardsWon = [];//cards that have been matched and taken away
    


    function createBoard(){
    for(i=0;i<cards.length;i++){
    const card = document.createElement("img")
      card.setAttribute("src","src/images/blank.png")
      card.setAttribute("data-id",i)
      card.addEventListener("click",flipCard)
      grid.appendChild(card)
    }
    }
    
    function flipCard(){
    /*
    everytime card is clicked it gets the id then goes 
    into cards array and using the id it gets the name 
    associated with the id and "pushes" it into the 
    cards chosen array.
    */
    let cardId = this.getAttribute("data-id")
     cardsChosen.push(cards[cardId].name)
     cardsChosenIds.push(cardId);
     this.setAttribute("src", cards[cardId].img)
     if(cardsChosen.length===2){
        setTimeout(checkForMatch,500)
     }
    }
    function checkForMatch(){

        //this selects all the images in the document
        const cardArray = document.querySelectorAll("img")
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
        
        /*this statement checks if the two id's match 
        and if true it sets the images of both to blank*/

        if(optionOneId==optionTwoId)//compares Id's which are all unique
        {
         alert("You have clicked the same image!")
         cardArray[optionOneId].setAttribute("src","src/images/blank.png")
         cardArray[optionTwoId].setAttribute("src","src/images/blank.png")
        } else if(cardsChosen[0]==cardsChosen[1]){//compares names
        alert("You have found a match!")
         cardArray[optionOneId].setAttribute("src","src/images/white.png")
         cardArray[optionTwoId].setAttribute("src","src/images/white.png")
         cardArray[optionOneId].removeEventListener("click",flipCard)
         cardArray[optionTwoId].removeEventListener("click",flipCard)
         cardsWon.push(cardsChosen);//adding the won cards to a separate array  
        }else{ //resets board if neither occurs
         cardArray[optionOneId].setAttribute("src","src/images/blank.png")
         cardArray[optionTwoId].setAttribute("src","src/images/blank.png")
         alert("Sorry, try again.")
        }
         //arrays are reset after checked for a match
        cardsChosen = [];
        cardsChosenIds = [];

        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cards.length/2){
        resultDisplay.textContent = "Congratulations! You have won!";
        }  
        console.log(cardsChosen)
        console.log(cardsWon)
    }
    createBoard();
    
})