var querystring = require("querystring");
var fs = require('fs');

function start(response, postData) {
	fs.readFile('index.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });	
}
function upload(response, postData) {
	fs.writeFile("./Samplefile.txt", querystring.parse(postData).text, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
	}); 

	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent: " + querystring.parse(postData).text);
	response.end();
	}

exports.start = start;
exports.upload = upload;