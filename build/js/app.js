
function fetchWeatherData() {
    //You will get this after you signup in https://api.weatherapi.com
    const apiKey = '125127b938d64e79b6a52310232408';
    // replace 'New York' with desired location
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Manila`;

    axios.get(apiUrl)
        .then(response => {
            console.log('Weather Data:', response.data.location);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// event listener
const fetchButton = document.getElementById('btn-view-data');
fetchButton.addEventListener('click', fetchWeatherData);