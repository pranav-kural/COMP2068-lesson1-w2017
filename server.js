// first node page to load in the browser

// reference the http library that ships with node
var http = require("http");

// start an http server asynchronously
http.createServer(function(req, res) {
    // send a response
    res.writeHead(200, "{'Content-type' : 'text/html'}");
    res.write('<style>body{background-color:yellow}</style><h1>Our first node page</h1>');
    res.end();
}).listen(3000);

// display a message to the console
console.log('Server running on port 3000');