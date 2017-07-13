var api_call = require('./api_call.js');

exports.get_cumulative_pStats = get_cumulative_pStats;

function get_cumulative_pStats(season, parameters, callback){
	// request Request 
	api_call.request('/v1.1/pull/nhl/'+season+'/cumulative_player_stats.json' + parameters, function(error, statusCode, headers, body){
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

/*get_cumulative_pStats('2016-2017', '', function(error, statusCode, headers, body){
	console.log('Error ' + error);
    console.log('statusCode ' + statusCode);
    console.log('head ' + headers);
    console.log('body ' + body);
})*/