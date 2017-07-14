module.exports = function(app) {
  var hockeyStatsController = require('../controllers/hockeyStatsController');


  // hockeyStats Routes
  app.route('/api/playerStats/:season')
    .get(function(req, res){
    	season = req.params.season;
    	parameters = '';
    	hockeyStatsController.return_cumulative_player_stats(season, parameters, function(body){
    		res.send(body);
    	})

    })

  app.route('/api/singlePlayerStats/:season/:player')
    .get(function(req, res){
      season = req.params.season;
      parameters = req.params.player;
      hockeyStatsController.return_playerStats(season, parameters, function(body){
        res.send(body);
      })
    })

    app.route('/api/teamRoster/:season/:team')
    .get(function(req, res){
      season = req.params.season;
      parameters = req.params.team;
      hockeyStatsController.return_teamRoster(season, parameters, function(body){
        res.send(body);
      })
    })

    app.route('/api/teamStandings/:season')
    .get(function(req, res){
      season = req.params.season;
      parameters = '';
      hockeyStatsController.return_teamStandings(season, parameters, function(body){
        res.send(body);
      })

    })
};