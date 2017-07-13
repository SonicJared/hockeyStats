module.exports = function(app) {
  var hockeyStatsController = require('../controllers/hockeyStatsController');


  // hockeyStats Routes
  app.route('/api/playerStats/:season')
    .get(function(req, res){
    	season = req.params.season;
    	parameters = '';
    	hockeyStatsController.return_cumulative_player_stats(season, parameters, function(body){
    		console.log('Hello');
    		res.send(body);
    	})

    })

    app.route('/api/teamStandings/:season')
    .get(function(req, res){
      season = req.params.season;
      parameters = '';
      hockeyStatsController.return_teamStandings(season, parameters, function(body){
        console.log('Hello');
        res.send(body);
      })

    })
};