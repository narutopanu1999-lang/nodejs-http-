const http = require("http")

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');
    if(req.url === '/'){
        res.statusCode = 200;
        res.end(
            `<h1>Hello World</h1>
            <h2>How are you doing</h2>
            <h3> Nodemone is working with npx as it was not downloaded globally</h3>
            `          
            )

        return ;
    }
    res.statusCode = 404;
    res.end(`
        <h1> Page not Found </h1>`);
})

server.listen(3000,()=>
{
    console.log(`Server is running`)
})