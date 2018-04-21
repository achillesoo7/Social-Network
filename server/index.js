const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var port = process.env.PORT || 8000;

const app = express();


app.use(express.static( '../dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`App is up and running on port ${port}`);
});
