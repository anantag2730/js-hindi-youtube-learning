# Project Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)



# Solution Code

## Project 1- colorChanger

```javascript
const buttons=document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector("body");

buttons.forEach( function(button) {
  console.log(button);
  button.addEventListener('click' ,function(event){
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey'){
      body.style.backgroundColor='grey';
    }
    else if(event.target.id === 'white'){
      body.style.backgroundColor='white';
    }
    else if(event.target.id === 'blue'){
      body.style.backgroundColor='blue';
    }
    else if(event.target.id === 'yellow'){
      body.style.backgroundColor='yellow';
    }
  })
});
```

## Project 2

```javascript
const form =document.querySelector('form');
// this outside usecase will give empty value on page reload and we want value after submit button
// const height=parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');

  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML="Please give a valid height."
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML="Please give a valid weight."
  }
  else {
    const bmi=(weight*10000)/(Math.pow(height,2));

    result.innerHTML=`<span>BMI -: ${bmi.toFixed(2)}</span>`;
  }
  
})
```

## Project 3 Digital Clock

```javascript
const clock=document.querySelector('#clock');
 
// let date= new Date();
// console.log(date.toLocaleTimeString());
// clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`


// will run after every set interval
setInterval(function(){
  let date= new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)//milli second 1sec=1000milli sec
```

## Project 4 Guess a number
#### My code
```javascript
const randomNum=Math.floor((Math.random()*100)+1);

const form=document.querySelector('.form');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const guess=parseInt(document.querySelector('#guessField').value);

  const result=document.getElementsByClassName('lowOrHi');// give an array collection since class name can be reused 

  if(guess<1 || guess>100 || guess==='' ||isNaN(guess))
  {
    result[0].innerHTML="<span>INVALID INPUT</span>";
  }
  if(guess===randomNum)
  {
    result[0].innerHTML=`<span>Congratulation! ${randomNum} matches.</span>`;
  }
  else{
    result[0].innerHTML=`<span>Oops! ${guess} doesn't match.</span>`;
  }

})
```
#### Chai aur code
```javascript
let randomNumber=Math.floor(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('.guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

let p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number.');
  }
  else if(guess<1){
    alert('Please enter number greater than 1.');
  }
  else if(guess>100){
    alert('Please enter number less than 100.');
  }
  else{
    prevGuess.push(guess);
    if(numGuess===11){
      displayGuess(guess);
      displayMessage(`Game Over! Random Number was-:${randomNumber}.`)
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage("Congratulations! You guessed it right.")
    endGame();
  }
  else if(guess<randomNumber)
  {
    displayMessage('Your guess is lower than random number.');
  }
  else {
    displayMessage('Your guess is more than random number.');
  }
}

function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML += `  ${guess}`
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start Again</h2>`
  playGame=false
  startOver.appendChild(p);
  newGame()
}

function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber=Math.floor(Math.random()*100 +1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })
}

```
