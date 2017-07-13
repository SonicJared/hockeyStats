var api_call = require('./api_call.js');

exports.get_teamStandings = get_teamStandings;

function get_teamStandings(season, parameters, callback){

	//List of parameters

	/* team={list-of-teams} (filter teams)
	division={list-of-divisions} (filter team divisions)
	playerstats={list-of-team-stats} (filter team stats)
	sort={sort-specifier} (sort the feed's content)
	offset={offset-specifier} (filter results starting at the given offset)
	limit={limit-specifier} (limit the maximum # of results)
	force={force-if-not-modified} (force content)  
	teamstats={list-of-team-stats} */


	api_call.request('/v1.1/pull/nhl/'+season+'/overall_team_standings.json' + parameters, function(error, statusCode, headers, body){
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