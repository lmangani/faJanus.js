var janus = require('./janus_seq.js');
var request = require('request');

var target_host = 'http://ssdock1.hepic.tel:8080';
var headersOpt = {
    "content-type": "application/json",
};

function sleep(time, callback) {
	console.log('wait '+time)
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

var prevts = 0;
janus.seq.forEach(function(data){
	if (prevts == 0) { var wait = 0; }
	else { var wait = parseInt((data.timestamp - prevts)/1000); }

	sleep(wait, function(){
		//console.log(data.timestamp,wait);
		request({ uri: target_host, method:'POST',json: JSON.stringify(data) }, function (error, response, body) {
		  console.log(error,response);
		  if (!error && response.statusCode == 200) {
		    console.log(body.id) // Print the shortened url.
		  }
		});
		prevts = data.timestamp;
	});
});
