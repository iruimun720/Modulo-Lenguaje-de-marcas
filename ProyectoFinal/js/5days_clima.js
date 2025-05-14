var clima = {};
fetch('./js/current_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent(json));

function fillContent(clima){
    var hours = clima.forecast.forecastday.hour;
    
    hours.forEach(function(item) {
    
    })
}