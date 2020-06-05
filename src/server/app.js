const express = require('express');
const cors = require('cors');
const app = express();

// urls white list for cors options, CHANGE THIS IF IN PRODUCTION  
const whitelist = ['http://localhost:8080'];

// configure cors options to allow requests from the front end 
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({
    message : "Hello World"
  })
})

module.exports = app;

