const EndPoints =
    {
        APIENDPOINT_GetWeatherByLatLong: "https://api.openweathermap.org/data/2.5/weather?",
        APIENDPOINT_GetWeatherByCityName: "https://api.openweathermap.org/data/2.5/weather?",
        APIENDPOINT_GetAirPollutionDataByLatLong: "http://api.openweathermap.org/data/2.5/air_pollution?",
        APIENDPOINT_GetLatLongByCityName: "http://api.openweathermap.org/geo/1.0/direct?",
        APIENDPOINT_GetCityNameByLatLong: "http://api.openweathermap.org/geo/1.0/reverse?",
        APIENDPOINT_GetWeatherOf5Days :"https://api.openweathermap.org/data/2.5/forecast?",

        APIENDPOINT_GetCountryFlag:"https://flagcdn.com/" 
 }

 module.exports=EndPoints

