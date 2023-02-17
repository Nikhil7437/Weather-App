

let weather = {
    apikey: '80a72477fc9d77475c725af641a8eac3',
    fetchweather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apikey
        )
            .then((responce) => {
                if (!responce.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
                return responce.json();
              })

            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);
        console.log(speed)
        console.log(humidity)
        document.querySelector('.city').innerHTML = "Weather in : " + name;
        document.querySelector('.temp').innerHTML = (temp-273.15).toFixed(2) + "°C";
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.cloud').innerHTML = description;
        document.querySelector('.humidity').innerHTML = 'Humidity :' + humidity + '%';
        document.querySelector('.wind').innerHTML = `Wind speed : ${speed} km/h `;

    },
    search: function () {
        this.fetchweather(document.querySelector('#sea').value)
    }
};


let btn = document.querySelector('.btn').addEventListener('click', function () {
    weather.search()
})


document.addEventListener('keydown', (event)=> {    
        if(event.key=='Enter')
    {
        weather.search()
    }
    
   
    });





















// https://api.openweathermap.org/data/2.5/weather?q=London&appid=80a72477fc9d77475c725af641a8eac3


//img **          http://openweathermap.org/img/wn/10d@2x.png