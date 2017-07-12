var cumulative_pStats = require('../externals/cumulative_pStats.js');

exports.list_all_stats = function(req, res) {
  Stat.find({}, function(err, stat) {
    if (err)
      res.send(err);
    res.json(stat);
  });
};

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