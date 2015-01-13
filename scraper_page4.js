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
	leftMenu: "",
	subTitleTag: "",
};

var leftMenuIndex = 0;
var subitemIndex = 0;


////////////////////////////////////////////////Left Menu

var leftMenu = { 
	Left_Menu: '',
};

function createLeft_Menu()
{
	Left_Menu.push({ 
		"Menu_Title": "",
             	"Menu_Link": "",
    	});
}


////////////////////////////////////////////////Sub Title

var subTitleTag = { 
	SubTitle: '',
};

function createSubTitle()
{
	SubTitle.push({ 
		"SubTitle_Item_Model": "",
		"SubTitle_Item_Name": "",
		"SubTitle_Description": "",
             	"SubTitle_Link": "",
		"SubTitle_src": "",
    	});
}



scrape();

////////////Scrape content from given URL////////////
function scrape(){
	
	//Title name
	scraperjs.StaticScraper.create('http://localhost/x_out4_1.html')
	    	.scrape(function($) {
	     		   return $(".nav_a").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			leftMenuIndex = text.length;
			Left_Menu = [];
				
			for(var i=0; i < leftMenuIndex; i++)
			{
				createLeft_Menu();
				Left_Menu[i].Menu_Title = S(text[i]).trim().s;
			}

			leftMenu.Left_Menu = Left_Menu;
			json.leftMenu = leftMenu;

 	})
	    	.scrape(function($) {
	     		   return $(".nav_a a").map(function() {
    		        	return $(this).attr('href');
     		   	}).get();
    			}, function(text) {
			leftMenuIndex = text.length;
				
			for(var i=0; i < leftMenuIndex; i++)
			{
				Left_Menu[i].Menu_Link = text[i];
			}

			leftMenu.Left_Menu = Left_Menu;
			json.leftMenu = leftMenu;

 	})
		//Sub Item
	    	.scrape(function($) {
	     		   return $("div[style*='padding:25px 0 0 0']").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			subitemIndex = text.length;
			SubTitle = [];
				
			for(var i=0; i < subitemIndex; i++)
			{
				createSubTitle()
				SubTitle[i].SubTitle_Item_Model = S(text[i]).trim().s;
			}

			subTitleTag.SubTitle = SubTitle;
			json.subTitleTag = subTitleTag;
				

 	})
	    	.scrape(function($) {
	     		   return $("div[style*='padding:0 0 3px 0']").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			subitemIndex = text.length;
				
			for(var i=0; i < subitemIndex; i++)
			{
				SubTitle[i].SubTitle_Item_Name = S(text[i]).trim().s;
			}

			subTitleTag.SubTitle = SubTitle;
			json.subTitleTag = subTitleTag;
				

 	})
		.scrape(function($) {
	     		   return $("div[style*='padding:5px 0 5px 0']").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			subitemIndex = text.length;
				
			for(var i=0; i < subitemIndex; i++)
			{
				text[i] = S(text[i]).lines();
				//text[i] = S(text[i]).trim().s;
				SubTitle[i].SubTitle_Description = S(text[i][1]).trim().s;
			}

			subTitleTag.SubTitle = SubTitle;
			json.subTitleTag = subTitleTag;
				

 	})
		.scrape(function($) {
	     		   return $("div[style*='float:left;width:133px'] div[style!='text-align:right; padding-top'] img").map(function() {
    		        	return $(this).attr('src');
     		   	}).get();
    			}, function(text) {
			subitemIndex = text.length;

			var index = 0;
			for(var i=0; i < subitemIndex/2; i++)
			{
				SubTitle[i].SubTitle_src = text[index];
				index = index+2;
			}

			subTitleTag.SubTitle = SubTitle;
			json.subTitleTag = subTitleTag;
				
 	})
		.scrape(function($) {
	     		   return $("div[style*='float:left;width:133px'] div a").map(function() {
    		        	return $(this).attr('href');
     		   	}).get();
    			}, function(text) {
			subitemIndex = text.length;

			var index = 0;
			for(var i=0; i < subitemIndex/2; i++)
			{
				SubTitle[i].SubTitle_Link = text[index];
				index = index+2;
			}

			subTitleTag.SubTitle = SubTitle;
			json.subTitleTag = subTitleTag;		
 	})
		.scrape(function($) {
	     		   return $(".td_02").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			text = S(text).lines();
			//console.log(text);
			//json.text2 = text;

 	})
		.scrape(function($) {
	     		   return $(".nav_a").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {
			text = S(text).lines();
			//console.log(text);
			//json.text3 = text;
			writeToJson(json);

 	})
		//a href
		.scrape(function($) {
	     		   return $("#content a").map(function() {
    		        	return $(this).attr('href');
     		   	}).get();
    			}, function(text) {
			var text_index = text.length;
			//console.log(text_index);
			//json.text4 = text;
			writeToJson(json);

 	})
		//img src
		.scrape(function($) {
	     		   return $("#content img").map(function() {
    		        	return $(this).attr('src');
     		   	}).get();
    			}, function(text) {
			var text_index = text.length;
			//console.log(text_index);
			//json.text5 = text;
			writeToJson(json);

 	})
}

//return $("div[style*='float:left'] a").map(function() {


///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('data/menu4/x_out4_1.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}




3
