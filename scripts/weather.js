
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
      let chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
      return chill + "°F.";
    } else {
      return "N/A";
    }
  }


const apiURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fairbanks%2C%20Alaska/today?unitGroup=us&key=UYSFHQEU8URG8UDVFGUJKSWN3&contentType=json';

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);



    displayWeather(data.currentConditions)

  };

function displayWeather(conditions) {
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${conditions.icon}.svg`;
    document.querySelector("#temp").textContent = conditions.temp + '°F';
    document.querySelector("#current-weather-condition").textContent = conditions.conditions;
    document.querySelector('#weather-icon').src = image;
    document.querySelector('#weather-icon').alt= conditions.conditions + ' icon';
    document.querySelector('#wind-speed').textContent = conditions.windspeed;
    document.querySelector('#wind-chill').textContent = calculateWindChill(conditions.temp, conditions.windSpeed);
}

getWeather();




