(function(){

	angular.module("hockeyStats")
		.factory("teamService", teamService);

	function teamService(api) {



		var teams = {
			teamArray: [],
			currentTeam: 0,
			rosterArray: [],
			currentAbbreviation: '',
			teamRoster: [],
			getTeam: getTeam,
			getRoster: getRoster
		};

		var season = '2016-2017';

		getTeam(season);

		function getTeam(season){
	 		 api.get(api.url + '/api/teamStandings/' + season, function(results){
	  		  teams.teamArray = results.overallteamstandings.teamstandingsentry;
	  		  console.log(results);
	  		})
	 	}

	 	function getRoster(season){
	 		api.get(api.url + '/api/teamRoster/' + season + '/' + teams.currentAbbreviation, function(results){
	  		  teams.teamRoster = results.cumulativeplayerstats.playerstatsentry;
	  		  console.log(results);
	  		})
	 	}

		console.log('service abbreviation: ' + teams.currentAbbreviation);
		console.log('service teamArray: ' + teams.teamArray);
		console.log('service currentTeam: ' + teams.currentTeam);
		return teams;
	}
	

	
})();
