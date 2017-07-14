angular.module('hockeyStats.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('StandingsCtrl', function($scope, api, teamService) {
  $scope.teams = teamService;
  season = '2016-2017';



  $scope.setTeam = function(rank){
    teamService.currentTeam = rank - 1;


    teamService.currentAbbreviation = teamService.teamArray[teamService.currentTeam].team.Abbreviation;
    teamService.getTeam(season);
    teamService.getRoster(season);
    console.log('abbreviation: ' + teamService.currentAbbreviation);
  }

})

.controller('teamCtrl', function($scope, $stateParams, teamService, playerService) {
  $scope.teams = teamService;

  $scope.$on('$ionicView.beforeEnter', function(){
    teamService.currentAbbreviation = teamService.teamArray[teamService.currentTeam].team.Abbreviation;

    teamService.getTeam(season);
    teamService.getRoster(season);
    $scope.team = teamService.teamArray[teamService.currentTeam];  
    $scope.roster = teamService.teamRoster;
    console.log($scope.roster);
    console.log(teamService.teamRoster);
  })

  $scope.players = playerService;

  $scope.setPlayer = function(ID){

    for(i=0; i<=playerService.playerArray.length; i++){
      if(ID == playerService.playerArray[i].player.ID){
        playerService.currentPlayer = i;
        console.log(i);
        break;
      }
    }

    console.log(ID);
  }

})

.controller('pStatsCtrl', function($scope, $stateParams, playerService){
  $scope.players = playerService;

  $scope.setPlayer = function(ID){

    for(i=0; i<=playerService.playerArray.length; i++){
      if(ID == playerService.playerArray[i].player.ID){
        playerService.currentPlayer = i;
        console.log(i);
        break;
      }
    }

    console.log(ID);
  }
})

.controller('playerCtrl', function($scope, $stateParams, playerService){
  $scope.players = playerService;
  $scope.$on('$ionicView.beforeEnter', function(){
    $scope.player = playerService.playerArray[playerService.currentPlayer];  
  })

});
