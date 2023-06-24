//your JS code here. If required.

 document.getElementById('getWeatherBtn').addEventListener('click', function() {
      var apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      var cityName = 'London';
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', apiUrl);
      xhr.setRequestHeader('Accept', 'application/json');

      xhr.onload = function() {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var weather = response.weather[0].main;
          var weatherDataElement = document.getElementById('weatherData');
          weatherDataElement.textContent = 'Current weather in ' + cityName + ': ' + weather;
        } else {
          console.log('Request failed. Status:', xhr.status);
        }
      };

      xhr.send();
    });