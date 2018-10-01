var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

// require all models
var db = require("./models");

//set port to 8080 or an available port! if not working before deployment, try 3000
var PORT = process.env.PORT || 8080;


// Initialize Express
var app = express();