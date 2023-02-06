const EndPoints = require('../API/APIEndPoints/APIEndPoints')
const axios = require('axios');
require("dotenv").config()

const Default_Lat = '28.6139'
const Default_Long = '77.2090'


async function CONTROLLER_GetStatus(req,res)
{
    try{
        res.status(200).send("OK")
    }
    catch(e)
    {
        res.status(400).send("NOT OK !")
    }
}

async function CONTROLLER_GetWeatherByLatLong(req, res) 
{

    let WeatherData = []
    try
    {

        let Lat = req.body.lat
        let Long = req.body.long
        let Units = req.body.units
        let Lang = req.body.lang

        let APIQuery1 = ''

        if (Lat == '' || Lat == undefined || Lat == null || Long == '' || Long == undefined || Long == null) 
        {
            APIQuery1 = EndPoints.APIENDPOINT_GetWeatherByLatLong + "lat=" + Default_Lat + "&lon=" + Default_Long + "&units=" + Units + "&lang=" + Lang + "&appid=" + process.env.OPENWEATHERMAP_API_KEY
        }
        else {
            APIQuery1 = EndPoints.APIENDPOINT_GetWeatherByLatLong + "lat=" + Lat + "&lon=" + Long + "&units=" + Units + "&lang=" + Lang + "&appid=" + process.env.OPENWEATHERMAP_API_KEY
        }

        await axios.get(APIQuery1)
        .then((resp) => {

            WeatherData.push(resp.data)
            // WE ONLY NEED data part
        })
        .catch(err => console.error("API_CALL_GetWeatherByLatLong ERROR :", err))



        res.status(200).send(WeatherData)
    }
    catch(e)
    {
        res.status(200).send(WeatherData)
    }
}


async function CONTROLLER_GetWeatherOf5Days(req, res) {

    let WeatherOf5Days = []

    try
    {
        let Lat = req.body.lat
        let Long = req.body.long
        let Units = req.body.units
        let Lang = req.body.lang


        let APIQuery2 = ''

        if (Lat == '' || Lat == undefined || Lat == null || Long == '' || Long == undefined || Long == null) {
            APIQuery2 = EndPoints.APIENDPOINT_GetWeatherOf5Days + "lat=" + Default_Lat + "&lon=" + Default_Long + "&units=" + Units + "&lang=" + Lang + "&appid=" + process.env.OPENWEATHERMAP_API_KEY
        }
        else {
            APIQuery2 = EndPoints.APIENDPOINT_GetWeatherOf5Days + "lat=" + Lat + "&lon=" + Long + "&units=" + Units + "&lang=" + Lang + "&appid=" + process.env.OPENWEATHERMAP_API_KEY
        }


        await axios.get(APIQuery2)
            .then((resp) => {


                WeatherOf5Days = resp.data.list

            })
            .catch(err => console.error("API_CALL_GetWeatherByLatLong ERROR :", err))

        res.status(200).send(WeatherOf5Days)

    }
    catch(e)
    {
        res.status(200).send(WeatherOf5Days)
    }

}



async function CONTROLLER_GetAirPollutionDataByLatLong(req, res) {


    let AirPollutionData = []

    try
    {
        let Lat = req.body.lat
        let Long = req.body.long

        let APIQuery3 = ''

        if (Lat == '' || Lat == undefined || Lat == null || Long == '' || Long == undefined || Long == null) {
            APIQuery3 = EndPoints.APIENDPOINT_GetAirPollutionDataByLatLong + "lat=" + Default_Lat + "&lon=" + Default_Long + "&appid=" + process.env.OPENWEATHERMAP_API_KEY
        }
        else {
            APIQuery3 = EndPoints.APIENDPOINT_GetAirPollutionDataByLatLong + "lat=" + Lat + "&lon=" + Long + "&appid=" + process.env.OPENWEATHERMAP_API_KEY
        }


        await axios.get(APIQuery3)
            .then((resp) => {

                AirPollutionData.push(resp.data.list[0])

            })
            .catch(err => console.error("API_CALL_GetWeatherByLatLong ERROR :", err))

        res.status(200).send(AirPollutionData)
    }
    catch(e)
    {
        res.status(200).send(AirPollutionData)
    }

}


async function CONTROLLER_GetLatLongByCityName(req, res) {


    let CityNamesList = []

    try
    {
        
        let CityName = req.body.cityname

        let APIQuery4 = EndPoints.APIENDPOINT_GetLatLongByCityName + "q=" + CityName + "&limit=50" + "&appid=" + process.env.OPENWEATHERMAP_API_KEY

        await axios.get(APIQuery4)
            .then((resp) => {
                CityNamesList = resp.data
            })
            .catch(err => console.error("API_CALL_GetLatLongByCityName ERROR :", err))

        res.status(200).send(CityNamesList)
    }
    catch(e)
    {
        res.status(200).send(CityNamesList)
    }

    
}





module.exports = {
    CONTROLLER_GetStatus,
    CONTROLLER_GetWeatherByLatLong,
    CONTROLLER_GetWeatherOf5Days,
    CONTROLLER_GetAirPollutionDataByLatLong,
    CONTROLLER_GetLatLongByCityName
}