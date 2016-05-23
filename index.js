var express = require('express');
var app = express();
var subdomain = require('wildcard-subdomains');

const hostname = '127.0.0.1';
const port = 3000;

// Indicate namespace to be replaced for routing
app.use(subdomain({
  domain: 'vcap.me'
, namespace: 'store'
, www: 'false'
}));

app.get('/', function(req, res){
  res.send("Homepage Weavler !")
});

// Add route and mount at `storeName.vcap.me:3000` index
app.get('/store/:storeName/',function(req, res){
    res.send('Subdomain app for : ' + req.params.storeName);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
