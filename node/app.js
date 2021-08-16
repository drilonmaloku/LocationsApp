const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// app configuration
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next){
    console.log(req.url, req.method)
    next();
});

// routes
app.use('/locations', require('./routes/locations'));
app.use('/cities', require('./routes/cities'));

app.listen(8000);