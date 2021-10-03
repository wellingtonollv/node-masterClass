const http = require('http');

const todos = [
    {id:1, text: 'test'},
    {id:2, text: 'test2'},
    {id:3, text: 'test3'},
]

const server = http.createServer((req, res)=>{
    const {method, url} = req
   let body = [];
   
   req
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body= Buffer.concat(body).toString();   

        let status = 404;
        const response = {
            sucess:false,
            data:null
        }   

        if(method==='GET' && url==='/todos'){
            status = 200;
            response.sucess = true;
            response.data= todos
        } else if(method === 'POST' && url==='/todos') { 
            const {id, text} = JSON.parse(body);

            if(!id || !text){
                status=400;
                response.error= 'please insert missing id or text'
            }else{
                todos.push({id, text});
                status=201;
                response.sucess=true;
                response.data=todos;
            }
        }

        res.writeHead(status,response);

        res.end(
            JSON.stringify(response)
        )
    })
    
});

const PORT = 5000;
server.listen(PORT, ()=>console.log(`running on port ${PORT}`))