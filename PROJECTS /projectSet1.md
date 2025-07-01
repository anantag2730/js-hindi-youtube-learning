# Project Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)



# Solution Code

## Project 1

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