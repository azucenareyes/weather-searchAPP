import axios from 'axios'

const API_KEY = '95f8f869f7d6c292ec41928715c137f8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);


  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
