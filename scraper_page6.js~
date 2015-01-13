var scraperjs = require('scraperjs');
var express   = require('express');
var app       = express();
var mkdirp    = require('mkdirp');

var he = require('he');
var toMarkdown = require('to-markdown').toMarkdown;

var S         = require('string');
var fs        = require('fs');

var request = require('request');

// var
var mainMemuIndex = 0;
var subMemuIndex = 0; 
var flashBannerIndex = 0; 
var subMenuIndex = 0;
var sub_title_Index = 0;

// JSON structure
var json = { 
	text1: "",
	text2: "",
	text3: "",
	text4: "",
	text5: "",
};

scrape();

////////////Scrape content from given URL////////////
function scrape(){
	
	//Title name
	scraperjs.StaticScraper.create('http://localhost/x_out6.html')
		//img src
		.scrape(function($) {
	     		   return $("#content").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			console.log(text);
			text = S(text).lines();
			json.text1 = text;

 	})
		//img src
		.scrape(function($) {
	     		   return $("#content img").map(function() {
    		        	return $(this).attr('src');
     		   	}).get();
    			}, function(text) {
			console.log(text);
			json.text2 = text;
			writeToJson(json);

 	})
}

//return $("div[style*='float:left'] a").map(function() {


///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('x_out6.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}




3
