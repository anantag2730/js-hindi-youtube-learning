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

```
