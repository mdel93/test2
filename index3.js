const http = require('http');
const fs = require('fs');

const port = 8080;

const httpServer = http.createServer(httpHandler);

httpServer.listen(port, () => {
    console.log(`HTTP server running at `);
});

function httpHandler(req, res) {
    fs.readFile('public/' + req.url, function (err, data) {

        if (err == null ) {

            res.writeHead(200, {'Content-Type': 'text/html', 'Accept-Ranges': 'bytes', 'Access-Control-Allow-Origin':'*','Cache-Control': 'max-age=600', 'Age': 0, 'Content-Type':'text/html; charset=utf-8'});
            res.write(data);
            res.end();
        }
    });
}
