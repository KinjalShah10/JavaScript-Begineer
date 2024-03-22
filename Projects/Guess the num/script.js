let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

//one array that stores the values given by user.
let prevGuess = [];
//numberof guessing
let numGuess = 1;
//after 10 user is not allowed to play and start again
let playGame = true;



if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();

        // takes values from the user.
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    });
}

//validate that the value is corect or not.
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
        
    }
    else if (guess < 1){
    alert('Please enter a number more than 1');
    }
    else if (guess > 100){
    alert('Please enter a number less than 100');
    }
    else{
        //pushing the number in array.
        prevGuess.push(guess)
        //after pushing check the no. of attempts.
        if(numGuess === 11){
            displayGuess(guess)
            displayMesssgae(`Game Over.Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}

//checks the number acoordingly and prints the message.
function checkGuess(guess){
    if(guess===randomNumber){
        displayMesssgae(`You guessed it WOhooooo`)
        endGame()


    }
    else if(guess < randomNumber){
        displayMesssgae(`Number is tooo low`);
    }
    else if(guess > randomNumber){
        displayMesssgae(`Number is tooo high`);
    }


}

//Dom maipulation is done here
function displayGuess(guess){
    //after the value is sumbit we need to display it.
    userInput.value = ''
    //array displaying
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}
function displayMesssgae(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start newgame</h2>'
    startOver.appendChild(p)
    playGame=false;
    newGame()
    
}
function newGame(){

   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11 - numGuess}`;
    userInput=removeAttruibute('disabled');
    startOver.removeChild(p);
    playGame = true;

   })

}