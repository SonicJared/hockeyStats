var api_call = require('./api_call.js');

exports.get_teamRoster = get_teamRoster;

function get_teamRoster(season, parameters, callback){
	// request Request 
	console.log('season: ' + season + 'parameters: ' + parameters);
	api_call.request('/v1.1/pull/nhl/'+season+'/roster_players.json' + parameters, function(error, statusCode, headers, body){
		if(error != null){
			console.log('Error ' + error);
		    console.log('statusCode ' + statusCode);
		    console.log('head ' + headers);	
    		console.log('body ' + body);
    		callback(null);
		}else{
			callback(body);
		}
});

}