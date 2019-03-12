import axios from 'axios';
const urlOrigin = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "601dc240c958f3586bd2bc3e9569d6de";

export const getWeatherByName1 = (name = "London") => {
  const url = `${urlOrigin}q=${name}&APPID=${apiKey}`;
  console.log(url);
  axios.get(url, {
    "Access-Control-Allow-Origin": '*'
  })
  .then((response) => {
    console.log("response", response.data);
  }).catch((e) => console.log(e));
};

export function* getWeatherByName(city) {
  const url = `${urlOrigin}q=${city}&APPID=${apiKey}`;
  const response = yield  axios.get(url, {
    "Access-Control-Allow-Origin": '*'
  })
    .then((response) => {
      return response
    }).catch((e) => console.log(e));
  const weather = yield response.data.weather[0].main;
  return weather;
}

// export function*  getWeatherByName(city) {
//   const url = `${urlOrigin}q=${city}&APPID=${apiKey}`;
//   const response = yield fetch(url, {
//     Access-Control-Allow-Origin": '*'
//   });
//   yield console.log("response" , response);
//   const weather = yield response.data;
//   yield console.log(weather);
//   return yield weather;
// }