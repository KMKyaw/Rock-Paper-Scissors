function randomGesture(userInput){
    switch(userInput){
        case 0: document.getElementById('user-select').src = "./img/Rock.png";break;
        case 1: document.getElementById('user-select').src = "./img/Paper.png";break;
        case 2: document.getElementById('user-select').src = "./img/Scissors.png";break;
    }
    let rand = Math.random() * 3;
    rand = Math.floor(rand);
    let ans; 
    if(rand == 0){
        console.log("ROCK" + rand);
        document.getElementById('ans').src = "./img/Rock.png"
        if(userInput == 1){
            document.getElementById('result').textContent = "WIN";
        }else if(userInput == 0){
            document.getElementById('result').textContent = "DRAW";
        }else{
            document.getElementById('result').textContent = "LOSE";
        }
    }
    else if(rand == 1){
        console.log("PAPER" + rand);
        document.getElementById('ans').src = "./img/Paper.png"
        if(userInput == 2){
            document.getElementById('result').textContent = "WIN";
        }else if(userInput == 1){
            document.getElementById('result').textContent = "DRAW";
        }else if(userInput == 0){
            document.getElementById('result').textContent = "LOSE";
        }
    }else{
        console.log("SCISSORS" + rand);
        document.getElementById('ans').src = "./img/Scissors.png"
        if(userInput == 1){
            document.getElementById('result').textContent = "LOSE";
        }else if(userInput == 2){
            document.getElementById('result').textContent = "DRAW";
        }else if(userInput == 0){
            document.getElementById('result').textContent = "WIN";
        }
    }
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}
