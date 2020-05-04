import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a8647896d872d02af929705a13740e33')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
  })


  .catch(err => alert("Incorrect City Name!"))
})
