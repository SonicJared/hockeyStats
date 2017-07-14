# hockeyStats
A server that makes calls to the mySportsFeed API, and an app that displays the stats

Aside from the IonicApp folder, this repository is a server that makes calls to the mySportsFeed API. To run the server, download the repo and type the following: 

'''
cd hockeyStats
npm install
node server.js
'''

Now the server is up and running.

The IonicApp folder contains an app that makes api calls to the server and displays the data returned to it.  To run the app:

'''
cd IonicApp/stats
npm install -g cordova ionic
ionic serve
'''

Now the app should be open in a browser.  It works best when inspected (right click->inspect).
