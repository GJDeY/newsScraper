var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
//require all models
var db = require("./models");

//set port to 8080 or an available port! if not working before deployment, try 3000
var PORT = process.env.PORT || 8080;
var app = express();
app.listen(PORT);
console.log('server running on PORT ' + PORT);




const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=> <h2 class="title welcome">Hello there!</h2>