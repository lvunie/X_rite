var request = require('request');
var Iconv = require('iconv-lite');

var fs        = require('fs');
var S         = require('string');

request({
    encoding: null,
    url: 'http://xrite.cn/product.asp?id=11'
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
	var string = Iconv.decode(body, 'gb2312').toString()
        console.log(string);

	//string = S(string).lines();

	writeToJson(string);
	
    }
	
});

function writeToJson(frame){

	fs.writeFile('html/x_out4_1.html', frame);
}


