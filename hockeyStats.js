$.ajax
({
  type: "GET",
  url: 'https://www.mysportsfeeds.com/api/feed/pull/nhl/2016-2017-regular/daily_player_stats.json?fordate=20161120&playerstats=G,A,Pts,Sh',
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Basic " + btoa('jaredpenner' + ":" + 'Stats123')
  },
  data: '{ "comment" }',
  success: function (){
    alert('Thanks for your comment!'); 
  }
});