
/**
 * Module dependencies.
 */

/**
 * Module dependencies.
 */

var request = require('request');
var Iconv = require('iconv-lite');

var BufferHelper = require('bufferhelper');

var express = require('express')
, jsdom = require('jsdom')
, request = require('request')
, url = require('url')
, app = module.exports = express.createServer();

var express = require('express')
  , routes = require('./routes');

var fs = require('fs');
var S         = require('string');

//var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var menu_tag = { 
	menus : "",
	URLs : "",
};


// Routes

function main(){

        request({uri: 'http://localhost/x_out.html'}, function(err, response, body){
                var self = this;
        	self.items = new Array();//I feel like I want to save my results in an array
         
        //Just a basic error check
                if(err && response.statusCode !== 200){
			console.log('Request error.');
		}
                //Send the body param as the HTML code we will parse in jsdom
        //also tell jsdom to attach jQuery in the scripts and loaded from jQuery.com

	jsdom.env({
    			html: body,
    			scripts: ['http://code.jquery.com/jquery-1.6.min.js'],
    		done: function (err, window) {
        		//Use jQuery just as in a regular HTML page
    
    		var $ = window.jQuery;

			var test = $("title").text();

			var bufferHelper = new BufferHelper();
			bufferHelper.concat(test); 

 //var string = Iconv.decode(bufferHelper.toBuffer(), 'gb2312').toString()		
 //console.log(string);
			console.log(test);			
			
    		}
	     });

        });
}

main();


function writeToJson(fileName,links){

        fs.writeFile(fileName, links);
  	
}

