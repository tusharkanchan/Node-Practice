const http = require('http');
const cd = require('./customDate');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('hello current date and time is' + cd.myDateTime())
    let q = url.parse(req.url, true).query;
    let txt = q.year + '' + q.month;
    res.write(txt)
    res.end();
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});