// request Request 
var btoa = require('btoa');
var CONFIG = require('../config');


exports.request = request;

function request(URL, callback){    
        
    const httpTransport = require('https');
    const responseEncoding = 'utf8';
    const httpOptions = {
        hostname: 'api.mysportsfeeds.com',
        port: '443',
        path: URL,
        method: 'GET',
        headers: {"Authorization":"Basic " + btoa(CONFIG.sports_user + ":" + CONFIG.sports_pass)}
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;
 
    const request = httpTransport.request(httpOptions, (res) => {
        let responseBufs = [];
        let responseStr = '';
        
        res.on('data', (chunk) => {
            if (Buffer.isBuffer(chunk)) {
                responseBufs.push(chunk);
            }
            else {
                responseStr = responseStr + chunk;            
            }
        }).on('end', () => {
            responseStr = responseBufs.length > 0 ? 
                Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;
            
            callback(null, res.statusCode, res.headers, responseStr);
        });
        
    })
    .setTimeout(0)
    .on('error', (error) => {
        callback(error);
    });
    request.write("");
    request.end();
}

/** /request('/v1.1/pull/nhl/2016-2017-regular/cumulative_player_stats.json?playerstats=G,A,Pts,Sh', function(error, statusCode, headers, body){
    console.log('Hello');

    console.log('Error ' + error);
    console.log('statusCode ' + statusCode);
    console.log('head ' + headers);
    console.log('body ' + body);

})/**/
