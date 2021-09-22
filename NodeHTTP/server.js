const http = require('http');

const todos = [
    {id:1, text: 'test'},
    {id:2, text: 'test2'},
    {id:3, text: 'test3'},
]

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'miltom');
    res.end(JSON.stringify({
        sucess: true,
        data: todos
    }));
});

const PORT = 5000;
server.listen(PORT, ()=>console.log(`running on port ${PORT}`))