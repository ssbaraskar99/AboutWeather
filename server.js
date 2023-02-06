const expressObj = require('express')
const axios = require('axios');
const bodyParser = require('body-parser');
const WeatherRouter = require('./routes/weather_routes')
require('dotenv').config()
const path = require("path")
const server = expressObj()
// ECLARIGN SERVER OBJECT & MAKING A SERVER

// API SPEED DELAYER, PREVENTS TOO MANY API CALLS
const CallDelayer = require("express-slow-down");
const IN_MINUTES = parseInt(process.env.IN_MINUTES) || 1
const MAX_REQUESTS = parseInt(process.env.MAX_REQUESTS) || 10
const DELAY_REQUESTS = parseInt(process.env.DELAY_REQUESTS) || 1000

const APISpeedLimiter = CallDelayer({
    windowMs: IN_MINUTES * 60 * 1000, // 1 minutes
    delayAfter: MAX_REQUESTS, // allow 30 requests per 1 minutes
    delayMs: DELAY_REQUESTS // begin adding 1sec of delay per request 
    
  });

server.use(APISpeedLimiter);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


server.use('/',WeatherRouter)
server.use(expressObj.static("build"))
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});


server.listen(process.env.PORT_NO,()=>{
    

    
})