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

.controller('pStatsCtrl', function($scope, $stateParams){
  $scope.players = [{name: 'Pavelski', goals: 23, id: 1}, {name: 'Burns', goals: 21, id: 2}];
})

.controller('playerCtrl', function($scope, $stateParams){


});
