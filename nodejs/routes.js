const http = require('http'); // Import Node.js core module for HTTP
const fs = require('fs'); // Import Node.js core module for file system operations


const server = http.createServer(function (request, response) {
    switch(request.url) { // request.url is the URL of the current request 
        case '/':
            response.writeHead(200, { 'content': 'text/html' });
            response.end(fs.readFileSync('./routes/index.html'));
            break;
        case '/about':
            response.writeHead(200, { 'content': 'text/html' });
            response.end(fs.readFileSync('./routes/about.html'));
            break;
        case '/contact':
            response.writeHead(200, { 'content': 'text/html' });
            response.end(fs.readFileSync('./routes/contact.html'));
            break;

        default: 
            response.writeHead(200, { 'content': 'text/html' });
            response.end('<h1>404 PAGE NOT FOUND</h1>');
    }
});

server.timeout = 15000; // Set timeout for 15 seconds 

// What set timeout does? It does not allow the server to wait for a request for more than 15 seconds. If the server does not receive any request for 15 seconds, it will automatically close the connection. This is useful when you are expecting a lot of requests and you want to close the connection if the server is not receiving any request for a long time.

server.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});