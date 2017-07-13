var cumulative_pStats = require('../externals/cumulative_pStats.js');
var teamStandings = require('../externals/teamStandings.js');

exports.return_cumulative_player_stats = function(season, parameters, callback){
    if(typeof(season).toLowerCase() != "string"){
        callback("Error: invalid season type");
        return false;
    }
    if(typeof(parameters.teams) != 'undefined'){
        //make sure teams are a valid type
    }

    //do the rest of the checks

    cumulative_pStats.get_cumulative_pStats(season, parameters, callback);
    return true;
}

exports.return_teamStandings = function(season, parameters, callback){
    if(typeof(season).toLowerCase() != "string"){
        callback("Error: invalid season type");
        return false;
    }
    if(typeof(parameters.teams) != 'undefined'){
        //make sure teams are a valid type
    }

    //do the rest of the checks

    teamStandings.get_teamStandings(season, parameters, callback);
    return true;
}