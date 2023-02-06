const express = require('express')

const router = express.Router()

const WeatherController = require('../controllers/weather_controller')

const apicache = require('apicache-plus')
// CACHING SAME REQUESTS PREVENTS UNNECSSARY API CALLS

require('dotenv').config()


router.get('/api/status',WeatherController.CONTROLLER_GetStatus)

router.post('/api/getcurrent', apicache(process.env.CACHE_MINUTES), WeatherController.CONTROLLER_GetWeatherByLatLong)

router.post('/api/get5days', apicache(process.env.CACHE_MINUTES),WeatherController.CONTROLLER_GetWeatherOf5Days)

router.post('/api/getairpoll',apicache(process.env.CACHE_MINUTES), WeatherController.CONTROLLER_GetAirPollutionDataByLatLong)

router.post('/api/getlatlongbycityname', apicache(process.env.CACHE_MINUTES),WeatherController.CONTROLLER_GetLatLongByCityName)





module.exports = router