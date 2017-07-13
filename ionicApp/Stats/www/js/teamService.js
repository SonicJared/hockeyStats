(function(){

	angular.module("hockeyStats")
		.factory("teamService", teamService);

	function teamService(api) {



		var teams = {
			teamArray: [],
			currentTeam: 0
		};

		  var season = '2016-2017';

 		 api.get(api.url + '/api/teamStandings/' + season, function(results){
  		  teams.teamArray = results.overallteamstandings.teamstandingsentry;
  		  console.log(results);
  		})

		return teams;
	}
	

	
})();
