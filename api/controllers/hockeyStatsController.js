var cumulative_pStats = require('../externals/cumulative_pStats.js');
var teamStandings = require('../externals/teamStandings.js');
var playerStats = require('../externals/playerStats.js');
var teamRoster = require('../externals/teamRoster.js');


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

exports.return_playerStats = function(season, parameters, callback){
    //checks
    if(typeof(parameters) != 'undefined'){
        parameters = "?player=" + parameters;
    }

    playerStats.get_playerStats(season, parameters, callback);
    return true;
}

exports.return_teamRoster = function(season, parameters, callback){
    //checks
    if(typeof(parameters) != 'undefined'){
        parameters = "?team=" + parameters;
    }

    teamRoster.get_teamRoster(season, parameters, callback);
    return true;
}