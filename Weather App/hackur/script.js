const apiKey = "Your API key";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
// const searchBox= $(".search input");
const searchBtn = document.querySelector(".search button");
// const searchBtn= $(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const weatherIcon = $(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    // $(".error").css("display", "block");
    document.querySelector(".weather").style.display = "none";
    // $(".weather").css("display", "none");
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    // $(".city").html(data.name);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    // $(".temp").html(Math.round(data.main.temp) + " °C");
    document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
    // $(".humidity").html(data.main.humidity + " % ");
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    // $(".wind").html(data.wind.speed + " km/h");

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    // $(".weather").css("display","block");
    document.querySelector(".error").style.display = "none";
    // $(".error").css("display" ,"none");
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBtn.classList.add("clicked");
  setTimeout(() => {
    searchBtn.classList.remove("clicked");
  }, 200);
});
searchBox.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    checkWeather(searchBox.value);
    searchBtn.classList.add("clicked");
    setTimeout(() => {
      searchBtn.classList.remove("clicked");
    }, 200);
  }
});
