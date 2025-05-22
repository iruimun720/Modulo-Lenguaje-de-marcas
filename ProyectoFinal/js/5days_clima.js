var clima = {};
fetch('./js/5days_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent5(json));

var climaContainer = document.getElementById("clima_container");
var climaTemplate = document.getElementById ("clima_template");

function fillContent5(clima){
    var days = clima.forecast.forecastday;
    
    days.forEach(function(item) {
        
        var date = item.date;
        var min_temp = item.day.mintemp_c;
        var max_temp = item.day.maxtemp_c;
        var max_wind = item.day.maxwind_kph;
        var icono = item.day.condition.icon;
        var precipip = item.day.daily_chance_of_rain;

        var climaElement = climaTemplate.cloneNode(true);
        //Delete id
        climaElement.removeAttribute("id");
        //Set display to block
        climaElement.style.display = "block";
        debugger;
        //Fill contenet
        climaElement.querySelector(".clima-img").src = icono;
        climaElement.querySelector(".date").textContent = "Day: "+date;
        climaElement.querySelector(".temp").textContent = "Min: "+min_temp + ", Max: "+max_temp;
        climaElement.querySelector(".wind").textContent = "Wind speed: "+max_wind+ " kph";
        climaElement.querySelector(".precipip").textContent = "Rain change: "+precipip+ " %";

        climaContainer.appendChild(climaElement);

    })
}