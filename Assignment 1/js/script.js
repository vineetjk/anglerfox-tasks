
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

function search(){
   var cityname = document.getElementById("cityname").value;
   cityname = cityname.toLowerCase().split(",")[0];
   fetchData(cityname);
}

function fetchData(cityname){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const { main, name, sys, weather } = data;
                    console.log(name);
                    console.log(main)
                    console.log(sys);
                    console.log(weather);


                   htmldata = ` <div class="card item-card center">
                   <img class="card-img-top"
                       src="http://openweathermap.org/img/wn/${
                           weather[0]["icon"]
                           }@2x.png"
                       alt="" style="width:100%; height: 200px; object-fit: contain;">
                   <div class="card-body">
                       <h4 class="card-title">
                          
                           ${name} <span style="color: rgba(0, 0, 0, 0.616);"> (${sys.country}) </span> <span> <img src="https://www.countryflags.io/${sys.country}/flat/32.png"></span> </h4>
                       <p class="card-text"> 
                       <span class="temp"> ${main.temp}°C </span>  <br>
                       <span style="font-weight: bolder;font-size: 30px; color: rgba(0, 0, 0, 0.63);"> ${weather[0]["main"]} </span>  <br>
                       <div class="otherdata">
       
                       
                       Humidity : <b> ${main.humidity}%</b> <br>
                       Pressure : <b> ${main.pressure} mbar</b><br>
                       Max Temperature : <b>${main.temp_max}°C</b> <br>
                       Min Temperature :<b> ${main.temp_min}°C</b> <br>
                   </div>
                       </p>
                   </div>
               </div>`

                document.getElementById("displayhere").innerHTML = htmldata;

    
                })
                .catch(() => {
                    msg.textContent = "Please search for a valid city 😩";
                });
}