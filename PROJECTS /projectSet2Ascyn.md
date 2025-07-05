# Project Related to Ascyn 

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code


### Project 5-Background Color Changer

```javascript
const randomColor=function(){
  const hex='0123456789ABCDEF'
  let color='#';
  for(let i=0;i<6;i++)
  {
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
console.log(randomColor());
let intervalId;
const startChangingColor=function(){
  if(!intervalId){
    intervalId=setInterval(changeColor,1000);
  }

  function changeColor(){
    const body=document.querySelector('body');
    body.style.backgroundColor = randomColor();
  }
  
}
const stopChangingColor=function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
```

### Project 6-KeyBoard Press

```javascript
const insert=document.querySelector('#insert');

window.addEventListener('keydown',(e) => {
  insert.innerHTML=`
  <div class="color">
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key===' '?"Space":e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
})
```