var express = require("express");
var path = require('path');
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
//require all models
var db = require("./models");

//set port to 8080 or an available port! if not working before deployment, try 3000
var PORT = process.env.PORT || 8080;
var app = express();

// request(url, function(err, res, body){
// var $ = cheerio.load(body);
// var headline = $(".headline");
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connection to MongoDB
mongoose.connect("mongodb://localhost/newsScraper", { useNewUrlParser: true });



app.get("/scrape", function (req, res) {
    axios.get("https://www.bleedcubbieblue.com/chicago-cubs-news").then(function (response) {

        var $ = cheerio.load(response.data);

        //grab h2 tags and put into an object
        $("h2 class").each(function (i, element) {
            var result = {};
        )

        //aticle element tags which i want to scrape from below 
        //<h2 class="c-entry-box--compact__title"><a data-chorus-optimize-field="hed" data-analytics-link="article" href="https://www.bleedcubbieblue.com/2018/9/29/17914178/cubs-social-media-night">A look at Cubs social media night </a></h2>

        //parse the body objects




        app.listen(PORT);
        console.log('server running on PORT ' + PORT);