var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=a8647896d872d02af929705a13740e33')
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      tempValue = ((tempValue-273.15)*9/5)+32;
      var descValue = data['weather'][0]['description'];


      temp.innerHTML = "It feels like "+Math.round(tempValue)+ " °F right now.";
      desc.innerHTML = "If you look at the sky, you should see "+descValue;
    })


    .catch(err => alert("Incorrect City Name!"))
})
