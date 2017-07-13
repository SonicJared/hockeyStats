var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept, authorization");
	next();
})


var routes = require('./api/routes/hockeyStatsRoutes');
routes(app);


app.listen(port);


console.log('hockeyStats RESTful API server started on: ' + port);