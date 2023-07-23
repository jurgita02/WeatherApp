const weatherDescriptions = {
    0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog and depositing rime fog',
  48: 'Fog and depositing rime fog',
  51: 'Drizzle: Light intensity',
  53: 'Drizzle: Moderate intensity',
  55: 'Drizzle: Dense intensity',
  56: 'Freezing Drizzle: Light intensity',
  57: 'Freezing Drizzle: Dense intensity',
  61: 'Rain: Slight intensity',
  63: 'Rain: Moderate intensity',
  65: 'Rain: Heavy intensity',
  66: 'Freezing Rain: Light intensity',
  67: 'Freezing Rain: Heavy intensity',
  71: 'Snowfall: Slight intensity',
  73: 'Snowfall: Moderate intensity',
  75: 'Snowfall: Heavy intensity',
  77: 'Snow grains',
  80: 'Rain showers: Slight intensity',
  81: 'Rain showers: Moderate intensity',
  82: 'Rain showers: Violent intensity',
  85: 'Snow showers: Slight intensity',
  86: 'Snow showers: Heavy intensity',
  95: 'Thunderstorm: Slight intensity',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
  };
  
  async function getWeatherData(latitude, longitude) {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  
  function getWeatherDescription(weatherCode) {
    return weatherDescriptions[weatherCode] || 'No data';
  }
  
  function displayWeatherData(weatherData, cityName) {
    const temperature = weatherData.current_weather.temperature || 'No data';
    const windspeed = weatherData.current_weather.windspeed || 'No data';
    const weatherCode = weatherData.current_weather.weathercode;
    const weatherDescription = getWeatherDescription(weatherCode);
  
    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').textContent = temperature ;
    document.getElementById('windspeed').textContent = windspeed ;
    document.getElementById('weather-description').textContent = weatherDescription;
  }
  
  async function getAndDisplayWeatherData() {
    const geoData = {
      latitude: 52.32,
      longitude: 9.799999,
      city: "Ronnenberg"    
    };
    const weatherData = await getWeatherData(geoData.latitude, geoData.longitude);
    displayWeatherData(weatherData, geoData.city);
  }
  getAndDisplayWeatherData();