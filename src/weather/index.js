import {connect} from 'react-redux';
import WeatherComponent from './WeatherComponent'
import { getWeatherByName } from './action';
const mapStateToProps = store => {
  const weather = store.weatherReducer;
  console.log("mapSateToProps", store);
  return {
    weatherInformation: weather?weather: 'Default Weather' ,
  };
};

const mapDispatchToPorps = dispatch => {
  return {
    onGetWeather: (cityName) => {
      dispatch(getWeatherByName(cityName));
    }
  };
};

const WeatherApp = connect(mapStateToProps, mapDispatchToPorps)(WeatherComponent);
export default WeatherApp;