const http = require('http');
const app = http.createServer((request, response) => { 
    response.writeHead(200, { 'Content-Type': 'text/plain' }); 
    response.end('Hello Holberton School!'); 
});
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
module.exports = app;
