const express = require('express');
const fs = require('fs');


// Custom middleware to log request details
const requestLoggerMiddleware = (req, res, next) => {
  let startTime = Date.now()
  next()
  let endTime =  Date.now()
  
  fs.appendFileSync("./configs/path.txt", `Route Visited : ${req.url} | Method : ${req.method} | ResponseTime : ${endTime-startTime} ms \n`)
  next()
};

module.exports = {
    requestLoggerMiddleware
}




