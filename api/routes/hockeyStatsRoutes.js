module.exports = function(app) {
  var hockeyStatsController = require('../controllers/hockeyStatsController');


  // todoList Routes
  app.route('/api/stats/:season')
    .get(function(req, res){
    	season = req.params.season;
    	parameters = '';
    	hockeyStatsController.return_cumulative_player_stats(season, parameters, function(body){
    		console.log('Hello');
    		res.send(body);
    	})

    })
};