angular.module('hockeyStats.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('StandingsCtrl', function($scope, api, teamService) {
  $scope.teams = teamService;



  $scope.setTeam = function(rank){
    teamService.currentTeam = rank - 1;
    console.log(rank);
  }

})

.controller('teamCtrl', function($scope, $stateParams, teamService) {
  $scope.teams = teamService;
  $scope.$on('$ionicView.beforeEnter', function(){
    $scope.team = teamService.teamArray[teamService.currentTeam];  
  })

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
