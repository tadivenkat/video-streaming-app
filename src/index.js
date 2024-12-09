const express = require("express");
const http = require("http");
 
const PORT = process.env.PORT;
const VIDEO_STORAGE_HOST = process.env.VIDEO_STORAGE_HOST;
const VIDEO_STORAGE_PORT = parseInt(process.env.VIDEO_STORAGE_PORT);
 
const app = express();
 
app.get("/video", (req, res) => {
  const forwardRequest = http.request(
    {
      host: VIDEO_STORAGE_HOST,
      port: VIDEO_STORAGE_PORT,
      path:'/video?path=Happy-20th-Birthday-Pranathi.mp4',
      method: 'GET',
      headers: req.headers
    }, 
    forwardResponse => {
      res.writeHeader(forwardResponse.statusCode, 
       forwardResponse.headers);
      forwardResponse.pipe(res);
    } 
  ); 
  
  req.pipe(forwardRequest);
});
 
app.listen(PORT);