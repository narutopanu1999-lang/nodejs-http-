import fs from 'node:fs';

const routesHandler = (req,res) => {
     if(req.url === '/'){
        
        fs.readFile('data.txt', 'utf8', (err, data) => {
            if (err && err.code !== 'ENOENT') {
                res.statusCode = 500;
                res.end('ERROR');
                return;
            }
    
            const name = data || '';
        
            res.setHeader('Content-Type','text/html');
            res.end(`
                <h1>${name}</h1>
                <form action = '/message' method='POST'>
                <label>Name:</label>
                <input type='text' name = 'name'/>
                <button type='submit' >Submit</button>
                `)
        })
        return
      }

      if(req.url === '/message' && req.method === 'POST'){

        let body = "";
        req.on('data',(chunk)=>{
            body += chunk;
        })
       console.log(body)

        req.on('end',() => {
            let formData = new URLSearchParams(body)
            console.log(formData);
            const name = formData.get('name') || '';

            fs.writeFile('data.txt',name,(err)=>{
                if(err){
                    res.statusCode = 500;
                    res.end("error");
                    return ;
                }

                res.statusCode = 303;
                res.setHeader('location','/')
                res.end();
            })
        })
        return;;
      }

      res.statusCode = 500;
      res.end("Page not found");
}


export default routesHandler