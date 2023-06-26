// завдання 2

const http = require('http');
const os = require('os');
const path = require('path');
const personalModule = require('./personal.module');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const date = new Date();
  const username = os.userInfo().username;
  const greeting = personalModule.greetUser(username);

  const pageContent = `
    <html>
      <head>
        <title>Server Greeting</title>
      </head>
      <body>
        <h1>${date}</h1>
        <h1>${greeting}</h1>
      </body>
    </html>
  `;

  res.end(pageContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});