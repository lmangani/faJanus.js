/* FaJanus 1.0.0 */

var janus = require('./janus_seq.js');
var request = require('request');

var target_host = 'http://localhost:8080';
var headersOpt = {
    "content-type": "application/json",
};

console.log('... Fly, Fajanus!');

var prevts = 0;
var wait = 0;
var tot = janus.seq.length;

janus.seq.forEach(function(data){
	if (prevts == 0) { wait += 0; }
	else { wait += parseInt((data.timestamp - prevts)/1000); }

	prevts = data.timestamp;

	setTimeout(function(data){
		var now = new Date();
		data['@timestamp'] = now.toISOString();
		request({ uri: target_host, method:'POST',json: data }, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    // console.log(body.id)
		  }
		});
	}, wait, data);
});

console.log();
