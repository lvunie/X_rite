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
};

scrape();

////////////Scrape content from given URL////////////
function scrape(){
	
	//Title name
	scraperjs.StaticScraper.create('http://localhost/x_out3.html')
	    	.scrape(function($) {
	     		   return $(".bt_01").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			text = S(text).lines();
			console.log(text);
			json.text1 = text;

 	})
		.scrape(function($) {
	     		   return $(".td_02").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			text = S(text).lines();
			console.log(text);
			json.text2 = text;

 	})
		.scrape(function($) {
	     		   return $(".td_en").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			text = S(text).lines();
			console.log(text);
			json.text3 = text;
			writeToJson(json);

 	})
}



///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('x_out3.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}





