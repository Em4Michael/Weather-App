
   
    //console.log(newName)

    updateApp = (city) => {
        
        document.querySelector('#cityname').innerText = city.name
        const iconName = city.weather[0].icon;
        const Icon = `http://openweathermap.org/img/wn/${iconName}@2x.png`
        
        
       const covert=(K)=>{
           C = Math.round(K-273.15);
           return C
       }

       const time = (icon) => {
           if(icon.includes('d')){
               return true;
           }    else {
               return false;
           }
       }

        document.getElementById("pp").innerHTML   = `
        <div class="mid">

        <div class="image"><img src="${Icon}" alt="" width="200rem"></div>

        <h3 class="weather" id="day1">${city.weather[0].description}</h3>

    </div>
    <div class="temp">
        <div class="left">
            <h2 class="minValues" id="day1Min">${covert(city.main.temp_min)} <span class="value">&deg;C</span> </h2>

            <h2 class="maxValues" id="day1Max">${covert(city.main.temp_max)} <span class="value">&deg;C</span> </h2>
        </div>
        <div class="right">
            <h1 class="maxValues" id="day1Max">${covert(city.main.temp)} <span class="value">&deg;C</span> </h1>
        </div>
    </div>

    <div class="conditions">
        <div class="one space">
            <img src="images/Sunny.png" alt="">
            <h4 class="speed">${city.wind.speed}km/h</h4>
            <h3>Speed</h3>

        </div>
        <div class="two space">
            <img src="images/humidity.png" alt="">
            <h4 class="humidity">${city.main.humidity}%</h4>
            <h4>Humidity</h4>

        </div>
        <div class="three space">
            <img src="images/Rain.png" alt="">
            <h4 class="rain">${city.wind.gust}km/h</h4>
            <h3>Gust</h3>

        </div>
    </div>
       
        `
        var root = document.querySelector(':root');
        if(time(iconName)){
           
                root.style.setProperty('--light-color', '65%');
                root.style.setProperty('--white-color', '30%');
               
            
        }    else {
            root.style.setProperty('--light-color', '0%');
            root.style.setProperty('--white-color', '10%');
           
        }
    }
    const cityName = document.querySelector('#buttonClick');
    const newName = document.querySelector('#cityInput');
    cityName.addEventListener('click', search=>{
    search.preventDefault();
    const citySearch = newName.value.trim();
   //console.log(citySearch);

   GetCity(citySearch)
   .then((data)=>{
       updateApp(data);
   })
   .catch((error)=>{console.log(error)})
   
})
 

const GetCity = async (city) => {
    const link = 'https://api.openweathermap.org/data/2.5/weather'
    const key ='249d2b45b68604e242df127efa28caa5'
    const query = `?q=${city}&appid=${key}`;

    const res = await fetch(link + query);

    const data = await res.json();
    return data;
   //console.log(data);
}


