const input = document.querySelector('#number');
const errorMsg = document.querySelector('#error-msg');
const btn = document.querySelector('button');

// Generate the number once
let computerNumber = Math.floor(Math.random() * 100) + 1;
console.log(computerNumber);

//Compares the userNumber and computerNumber to guess the correct number
const guessNumber = (userNumber) => {
    if (userNumber > computerNumber) {
        errorMsg.innerText = 'Too high!';
        
    } else if (userNumber < computerNumber) {
        errorMsg.innerText = 'Too low!';
    } else {
        errorMsg.innerText = 'Correct, You guessed it!';
        errorMsg.style.color = 'black';
        input.disabled = true;
        
    }
};

//Checks for the valid userNumber and passes the value to guessNumber function
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userInput = input.value.trim();
    const userNumber = Number(userInput);

    if (userInput === '') {
        errorMsg.innerText = 'Input cannot be empty.';
        errorMsg.style.color = '#FF474C';
        
    } 
    else if (isNaN(userNumber) || userNumber <= 0 || userNumber >= 100) {
        errorMsg.innerText = 'Enter a number between 1 and 100';
        errorMsg.style.color = '#FF474C';
        
    }
    else{
    errorMsg.innerText = '';
    guessNumber(userNumber);

    }
    
});

