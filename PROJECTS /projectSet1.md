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

