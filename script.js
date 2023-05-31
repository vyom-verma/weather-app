const apikey="f875d8e9a0711c221392811e6b8f4930";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherImage=document.querySelector(".img");

async function checkWeather(city){
    const reponse=await fetch(apiurl +city+ `&appid=${apikey}`);
    if(reponse.status=="404"){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="display";

    }
    var data= await reponse.json();
    

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherImage.src="weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImage.src="weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherImage.src="weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherImage.src="weather-app-img/images/snow.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImage.src="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImage.src="weather-app-img/images/rain";
    }
    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click" , ()=>{

    
    checkWeather(searchbox.value);
    
})

