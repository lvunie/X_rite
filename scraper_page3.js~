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
var addressIndex = 0;


// JSON structure
var json = { 
	ContactInfo : "",
};
////////////////////////////////////////////////////
var ContactInfo = { 
	Contact: '',
};

function createContact()
{
	Contact.push({ 
		"Chinese_address": "",
             	"English_address": "",
    	});
}

scrape();

////////////Scrape content from given URL////////////
function scrape(){
	
	//Title name
	scraperjs.StaticScraper.create('http://localhost/x_out3.html')
	    	.scrape(function($) {
	     		   return $("div[style*='float:left; width:285px']").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			addressIndex = text.length;
			
			Contact = [];

			for(var i=0; i < addressIndex; i++)
			{
				createContact();
				text[i] = S(text[i]).trim().s;
				Contact[i].Chinese_address = S(text[i]).lines();
			}

			ContactInfo = Contact;
			json.ContactInfo = ContactInfo;

 	})

	    	.scrape(function($) {
	     		   return $("div[style*='float:left; width:313px']").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			addressIndex = text.length;

			for(var i=0; i < addressIndex; i++)
			{
				text[i] = S(text[i]).trim().s;
				Contact[i].English_address = S(text[i]).lines();
			}

			json.ContactInfo = ContactInfo;

			writeToJson(json);
				
 	})

}



///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('data/menu3/x_out3.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}





