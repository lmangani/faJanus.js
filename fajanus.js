/* FaJanus 1.0.0 */

const CommandLineArgs = require('command-line-args');
var defaults = [{ name: 'file', alias: 'f' }, { name: 'url', alias: 'u' }]
var options = CommandLineArgs(defaults);

var request = require('request');
var janus = require( options.file || './janus_seq.js');

var target_host = options.url || 'http://localhost:8123';
var headersOpt = {
    "content-type": "application/json",
};

console.log('... Fly, Fajanus!',options);

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
