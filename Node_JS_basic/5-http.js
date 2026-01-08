const http = require('http');
const app = http.createServer((request, response) => { 
    response.writeHead(200, { 'Content-Type': 'text/plain' }); 
    
    if(response.url === '/'){
        response.end('Hello Holberton School!')
    }
    if(response.url === '/students'){
        response.end('This is the list of our students')
        countStudents('database.csv')
    }

});
app.listen(1245);
module.exports = app;
