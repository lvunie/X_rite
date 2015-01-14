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
var sub_links_Index = 0;
var news_Index = 0;

// JSON structure
var json = { 
	MainMenu : "",
	SubMenu : "",
	FlashBanner: "",
	Product_Display: "",
	Company_News:"",
	
};
////////////////////////////////////////////////Company_News

var Company_News = {
	img_Company_News: '',	
	C_News: '',

};

function createCompanyNews()
{
	C_News.push({ 
		"News_Description": "",
             	"News_Link": "",
    	});
}

////////////////////////////////////////////////Product_Display

var Product_Display = {
	P_Display: '',

};

function createDisplayTag()
{
	P_Display.push({ 
		"Description": "",
             	"Link": "",
		"img_src": "",
    	});
}


/////////////////////////////////////////////////Main Memu
var MainMenu = {
    	MainMenuTag: '',
}

function createMainMenu()
{
	MainMenuTag.push({ 
		"Menu_title": "",
             	"Menu_subMenu": "",
    	});
}

function createMenu_subMenu()
{
	Menu_subMenu.push({ 
		"Submenu_title": "",
             	"Submenu_link": "",
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
			//json.MainMenu = MainMenu;

 	})
		.scrape(function($) {
	     		   return $(".nav_chosen div").map(function() {
    		        	return $(this).text();
     		   	}).get();
    			}, function(text) {

			subMemuIndex = text.length
			console.log(subMemuIndex);

	})

	/////////////////////////////////subpage start////////////////////////////
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(0).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(1).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				Menu_subMenu = [];
				sub_title_Index = text.length;

				for(var i=0; i < sub_title_Index; i++)
				{	
					createMenu_subMenu();
					Menu_subMenu[i].Submenu_title = text[i];
				}

				MainMenuTag[1].Menu_subMenu = Menu_subMenu;
				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(2).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				sub_title_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_title_Index; i++)
				{	
					createMenu_subMenu();
					Menu_subMenu[i].Submenu_title = text[i];
				}

				MainMenuTag[2].Menu_subMenu = Menu_subMenu;
				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";
	
	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(3).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				Menu_subMenu = [];
				sub_title_Index = text.length;

				for(var i=0; i < sub_title_Index; i++)
				{	
					createMenu_subMenu();
					Menu_subMenu[i].Submenu_title = text[i];
				}

				MainMenuTag[3].Menu_subMenu = Menu_subMenu;
				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(4).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				Menu_subMenu = [];
				sub_title_Index = text.length;

				for(var i=0; i < sub_title_Index; i++)
				{	
					createMenu_subMenu();
					Menu_subMenu[i].Submenu_title = text[i];
				}

				MainMenuTag[4].Menu_subMenu = Menu_subMenu;
				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
	  	.scrape(function($) {
	     		return $(".nav_chosen div").eq(5).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
				Menu_subMenu = [];
				sub_title_Index = text.length;

				for(var i=0; i < sub_title_Index; i++)
				{	
					createMenu_subMenu();
					Menu_subMenu[i].Submenu_title = text[i];
				}

				MainMenuTag[5].Menu_subMenu = Menu_subMenu;
				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(6).find('li').map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {

				Menu_subMenu = [];
				sub_title_Index = text.length;

				for(var i=0; i < sub_title_Index; i++)
				{	
					createMenu_subMenu();
					Menu_subMenu[i].Submenu_title = text[i];
				}
		
				MainMenuTag[6].Menu_subMenu = Menu_subMenu;
				MainMenu.MainMenuTag = MainMenuTag;
				json.MainMenu = MainMenuTag;

				Menu_subMenu = "";

	})
//////////////////////////Memu href/////////////////////////////////////////////////		
//			.scrape(function($) {
//	     		return $(".nav_chosen a").map(function() {
//    				return $(this).attr('href');
//     			 }).get();
//    			}, function(text) {
//				json.href_link = text;
//	})		
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(1).find('a').map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

				sub_links_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_links_Index; i++)
				{	
					createMenu_subMenu();
					MainMenuTag[1].Menu_subMenu[i].Submenu_link = text[i];
				}

				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})

		.scrape(function($) {
	     		return $(".nav_chosen div").eq(2).find('a').map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

				sub_links_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_links_Index; i++)
				{	
					createMenu_subMenu();
					MainMenuTag[2].Menu_subMenu[i].Submenu_link = text[i];
				}

				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(3).find('a').map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

				sub_links_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_links_Index; i++)
				{	
					createMenu_subMenu();
					MainMenuTag[3].Menu_subMenu[i].Submenu_link = text[i];
				}

				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";
	})
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(4).find('a').map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

				sub_links_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_links_Index; i++)
				{	
					createMenu_subMenu();
					MainMenuTag[4].Menu_subMenu[i].Submenu_link = text[i];
				}

				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(5).find('a').map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

				sub_links_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_links_Index; i++)
				{	
					createMenu_subMenu();
					MainMenuTag[5].Menu_subMenu[i].Submenu_link = text[i];
				}

				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";

	})
		.scrape(function($) {
	     		return $(".nav_chosen div").eq(6).find('a').map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

				sub_links_Index = text.length;
				Menu_subMenu = [];

				for(var i=0; i < sub_links_Index; i++)
				{	
					createMenu_subMenu();
					MainMenuTag[6].Menu_subMenu[i].Submenu_link = text[i];
				}

				MainMenu.MainMenuTag = MainMenuTag;

				Menu_subMenu = "";
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
///////////////////////////////blue
	// product display
		.scrape(function($) {
	     		return $(".td_02 a[target=_blank]").map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {
			P_Display = [];
			createDisplayTag();
			P_Display[0].Description = S(text[1]).trim().s;
			createDisplayTag();
			P_Display[1].Description = S(text[4]).trim().s;
			createDisplayTag();
			P_Display[2].Description = S(text[7]).trim().s;

			Product_Display.P_Display = P_Display;
			//json.Product_Display = Product_Display;
	})
		.scrape(function($) {
	     		return $("div[style*='float:left;width:110px;margin:0'] a").map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {
			P_Display[0].Link = text[0];
			P_Display[1].Link = text[3];
			P_Display[2].Link = text[6];

			Product_Display.P_Display = P_Display;
	})
.scrape(function($) {
	     		return $("div[style*='float:left;width:110px;margin:0'] img").map(function() {
    				return $(this).attr('src');
     			 }).get();
    			}, function(text) {
			P_Display[0].img_src = text[0];
			P_Display[1].img_src = text[1];
			P_Display[2].img_src = text[2];

			Product_Display.P_Display = P_Display;
			json.Product_Display = Product_Display;
	})
	//return $("div[style*='float:left;width:260px; ']").map(function() {
	// company news
		.scrape(function($) {
	     		return $("span[style*='float:left; padding:15px 15px 0 0'] img").map(function() {
    				return $(this).attr('src');
     			 }).get();
    			}, function(text) {

			img_Company_News = text;
			Company_News.img_Company_News = img_Company_News;
			
	})
	.scrape(function($) {
	     		return $("div[style*='padding:6px']").map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {

			news_Index = text.length;
			C_News = [];
			createCompanyNews();
			C_News[0].News_Description = '';
			
			for(var i=0; i < news_Index; i++)
			{
				createCompanyNews();
				C_News[i+1].News_Description = text[i];
			}

			Company_News.C_News = C_News;
			json.Company_News = Company_News;
	})
		.scrape(function($) {
	     		return $("div[style*='padding:6px'] a").map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

			C_News[0].News_Link = '';
			
			for(var i=0; i < news_Index; i++)
			{
				C_News[i+1].News_Link = text[i];
			}

			Company_News.C_News = C_News;
			json.Company_News = Company_News;
			writeToJson(json);
	})
		.scrape(function($) {
	     		return $("div[style*='padding:0 0 0 0'] a").map(function() {
    				return $(this).attr('href');
     			 }).get();
    			}, function(text) {

			C_News[0].News_Link = text[0];
			writeToJson(json);
	})
		.scrape(function($) {
	     		return $("div[style*='padding:0 0 0 0']").map(function() {
    				return $(this).text();
     			 }).get();
    			}, function(text) {

			C_News[0].News_Description = S(text).trim().s;
			json.Company_News = Company_News;
			writeToJson(json);
	})
	
}



///////////////Write content to JSON file//////////////////////////////////////////////////
function writeToJson(frame){

        fs.writeFile('data/menu1/x_out.json', JSON.stringify(frame, null, 4), function(err){
  
        })	
}





