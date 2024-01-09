const http = require('http');

function basicHandler(request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('<h1>NODE HTTP 1 EXAMPLE</h1> <p>Hello I am Bobur</p>');
    response.end();
}

const server = http.createServer(basicHandler);

server.timeout = 15000;

server.listen(3000, function() {
    console.log('Server is running on port 3000...')
});