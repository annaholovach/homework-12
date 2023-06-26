// завданя 1

const http = require('http');
const os = require('os');
const path = require('path');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

const username = os.userInfo().username;
const osType = os.type();
const uptime = Math.floor(os.uptime() / 60);
const currentDirectory = process.cwd();
const serverFilename = path.basename(__filename);

const pageContent = `
    <html>
      <head>
        <title>Server Information</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p>Current user name: ${username}</p>
        <p>OS Type: ${osType}</p>
        <p>System work time: ${uptime} minutes</p>
        <p>Current work directory: ${currentDirectory}</p>
        <p>Server file name: ${serverFilename}</p>
      </body>
    </html>`;

res.end(pageContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
    