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
var mainMemuIndex = 0;
var subMemuIndex = 0; 
var flashBannerIndex = 0; 
var subMenuIndex = 0;

// JSON structure
var json = { 
	//nav_topMenu : "",  
	//nav_subMenu1 : "",
	//nav_subMenu2 : "",
	//nav_subMenu3 : "",
	//nav_subMenu4 : "",
	//nav_subMenu5 : "",
	//nav_subMenu6 : "",
	//nav_subMenu7 : "",
	href_link: "",

	MainMenu : "",
	SubMenu : "",
	FlashBanner: "",
};
/////////////////////////////////////////////////Main Memu
var MainMenu = {
    	MainMenuTag: '',
}

function createMainMenu()
{
	MainMenuTag.push({ 
		"Menu_title": "",
             	"Menu_subMene": "",
    	});
}

///////////////////////////////////////////////////SubMenu
var SubMenu = {
    	SubMenuTag: '',
}

function createSubMenu()
{
	SubMenuTag.push({ 
		"SubMenu_title": "",
             	"SubMenu_href": "",
    	});
}

/////////////////////////////////////////////////flashbanner
var FlashBanner = {
    	SubBanner: '',
}


function createFlashBanner()
{
	SubBanner.push({ 
		"FlashBanner_src":    "",
             	"FlashBanner_URL": "",
    	});
}

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
			mainMemuIndex = text.length;
			MainMenuTag = [];
				
			for(var i=0; i < mainMemuIndex; i++)
			{
				createMainMenu();
				MainMenuTag[i].Menu_title = text[i];
			}

			MainMenu.MainMenuTag = MainMenuTag;
			json.MainMenu = MainMenu;

 	})
		.scrape(function($) {
	     		   return $(".nav_chosen div").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {

			subMemuIndex = text.length
			console.log(subMemuIndex);

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(0).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu1 = text;
				//console.log( text);

				MainMenuTag[0].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;
	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(1).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu2 = text;
				//console.log( text);

				MainMenuTag[1].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;
				json.MainMenu = MainMenu;

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(2).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu3 = text;
				//console.log( text);

				MainMenuTag[2].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;
				//json.MainMenu = MainMenu;
	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(3).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu4 = text;
				//console.log( text);

				MainMenuTag[3].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(4).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu5 = text;
				//console.log( text);

				MainMenuTag[4].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(5).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu6 = text;
				//console.log( text);

				MainMenuTag[5].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;

	})
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(6).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				//json.nav_subMenu7 = text;
				//console.log( text);

				MainMenuTag[6].Menu_subMene = text;
				MainMenu.MainMenuTag = MainMenuTag;


			writeToJson(json);
	})
//////////////////////////Memu href		
			.scrape(function($) {
	     		return $(".nav_chosen a").map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {
				json.href_link = text;
				console.log(text);
	})

//////////////////submenu///////////////////////////////////////////////////////////////
		.scrape(function($) {
	     		return $(".submenu li").map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				SubMenuTag = [];
				subMenuIndex = text.length;
				
				for(var i=0; i < subMenuIndex; i++)
				{
					createSubMenu();
					SubMenuTag[i].SubMenu_title = text[i];
				}


				SubMenu.SubMenuTag = SubMenuTag;
			
	})
		//submenu_URL
		.scrape(function($) {
	     		return $(".submenu a").map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {
				subMenuIndex = text.length;
				
				for(var i=0; i < subMenuIndex; i++)
				{
					SubMenuTag[i].SubMenu_href = text[i];
				}

				SubMenu.SubMenuTag = SubMenuTag;
				json.SubMenu = SubMenu;

			
	})

		.scrape(function($) {
	     		return $(".flashbanner img").map(function() {
    				return $(this).attr('src');
     			 }).get();
    			}, function(text) {
				SubBanner = [];
				flashBannerIndex = text.length;

				for(var i=0; i < flashBannerIndex; i++)
				{
					createFlashBanner();
					SubBanner[i].FlashBanner_src = text[i];
				}

				FlashBanner.SubBanner = SubBanner;

	})
		.scrape(function($) {
	     		return $(".flashbanner a").map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {
                		flashBannerIndex = text.length;				
				
				for(var i=0; i < flashBannerIndex; i++)
				{
					SubBanner[i].FlashBanner_URL = text[i];
				}

				FlashBanner.SubBanner = SubBanner;
				json.FlashBanner = FlashBanner;
				writeToJson(json);

	})

///////Example Start//////////////////////////////////////////
//		.scrape(function($) {
//	     		return $(".flashbanner a").map(function() {
//    				return $(this).attr('href');
//     			 }).get();
//    			}, function(text) {
//				json.flashbanner_URL = text;
//				console.log(text);
//
//		writeToJson(json);
//	})
///////Example End//////////////////////////////////////////////
}


//////
///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('x_out.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}





