var scraperjs = require('scraperjs');
var express   = require('express');
var app       = express();
var mkdirp    = require('mkdirp');

var he = require('he');
var toMarkdown = require('to-markdown').toMarkdown;

var S         = require('string');
var fs        = require('fs');

var request = require('request');
var Iconv = require('iconv-lite');

// var
var subMemuIndex = 0; 



// JSON structure
var json = { 
	topMemu : "",  
	subMenu : "",
};

scrape();

////////////Scrape content from given URL////////////
function scrape(){
	
	//Title name
	scraperjs.StaticScraper.create('http://localhost/x_out.html')
	    		.scrape(function($) {
	     		   return $("#nav a[class!='chosen']").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {

			console.log(text);
			json.topMemu = text;

		writeToJson(json);
		
 	})
		.scrape(function($) {
	     		   return $(".nav_chosen div").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {

			subMemuIndex = text.length
			console.log(subMemuIndex);

			for(var i = 0; i < subMemuIndex; i++)
			{
				//console.log(i);
				scraperjs.StaticScraper.create('http://localhost/x_out.html')
	    				.scrape(function($) { console.log(i);
	     				   return $(".nav_chosen div").eq(i).find('li').map(function() {
    				        	return $(this).text();
     			 	  	}).get();
    					}, function(text) {

					console.log('index:'+ i +' ..' +  text);
				})
					
			}

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(6).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {

				console.log( text);
	})

	


}


//////
///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('x_out.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}





