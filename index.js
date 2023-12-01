const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    const playerOneMoveimg = document.getElementById("player-one-move__img");
   
    console.log(playerOneMoveimg);
    playerOneMoveimg.setAttribute("src", `./images/${moveOne}.png`);
    const playerTwoMoveimg=document.getElementById("player-two-move__img")
    playerTwoMoveimg.setAttribute("src", `./images/${moveTwo}.png`);
    
    console.log(playerTwoMoveimg);
    
    const para = document.createElement("p");
    para.className="outcome";
    para.id="outcome";
    const node = document.createTextNode(outcome);

    para.appendChild(node);

    document.body.appendChild(para);



   // outcome = getOutcome(moveOne,moveTwo)
    console.log(outcome);
    
  

    // TODO Implement this method to update the DOM
    // There are some images you can use in the images directory
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  