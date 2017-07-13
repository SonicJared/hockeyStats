(function(){

	angular.module("hockeyStats")
		.factory("playerService", playerService);

	function playerService(api) {



		var players = {
			playerArray: [],
			currentPlayer: 0,
		};

		  var season = '2016-2017';

 		 api.get(api.url + '/api/playerStats/' + season, function(results){
  		  players.playerArray = results.cumulativeplayerstats.playerstatsentry;
  		  console.log(results);
  		})

		return players;
	}
	

	
})();
