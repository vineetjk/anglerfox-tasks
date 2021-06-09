
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

function search(){
   var cityname = document.getElementById("cityname").value;
   cityname = cityname.toLowerCase();
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


                   htmldata = `<div class="card item-card">
                    <img class="card-img-top"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                            weather[0]["icon"]
                            }.svg"
                        alt="" style="width:100%; height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h4 class="card-title">${name} (${sys.country}) </h4>
                        <p class="card-text">
                        Temperature : ${main.temp}°C <br>
                        Humidity : ${main.humidity}% <br>
                        Pressure : ${main.pressure} mbar<br>
                        Max Temperature : ${main.temp_max}°C <br>
                        Min Temperature : ${main.temp_min}°C <br>
                        </p>
                    </div>
                </div>`

                document.getElementById("displayhere").innerHTML = htmldata;

    
                })
                .catch(() => {
                    msg.textContent = "Please search for a valid city 😩";
                });
}