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
	scraperjs.StaticScraper.create('http://localhost/x_out_product.html')
		//img src
		.scrape(function($) {
	     		   return $(".blue").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			console.log(text);
			//text = S(text).trim().s;
			//text = S(text).lines();
			text = S(text).decodeHTMLEntities().s;
			fs.writeFile('x_out_product.md', text);
			json.text2 = text;
			
 	})
		//img src
		.scrape(function($) {
	     		   return $("#content img").map(function() {
    		        	return $(this).attr('src');
     		   	}).get();
    			}, function(text) {
			console.log(text);
			writeToJson(json);

 	})
}


///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('x_out_product.json', JSON.stringify(frame, null, 4), function(err){
		  
        })	

}


