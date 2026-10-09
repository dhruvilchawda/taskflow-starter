const http=require('node:http');const fs=require('node:fs');const path=require('node:path');
const root=__dirname;const allowed={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js'};
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
const server=http.createServer((req,res)=>{if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}let pathname;try{pathname=new URL(req.url,'http://localhost').pathname;}catch{res.writeHead(400).end();return;}const filename=allowed[pathname];if(!filename){res.writeHead(404).end('Not found');return;}const p=path.join(root,filename);fs.stat(p,(err,stat)=>{if(err||!stat.isFile()){res.writeHead(404).end();return;}res.writeHead(200,{'Content-Type':types[path.extname(p)],'X-Content-Type-Options':'nosniff'});if(req.method==='HEAD')res.end();else fs.createReadStream(p).pipe(res);});});
if(require.main===module)server.listen(Number(process.env.PORT)||3000,'127.0.0.1',()=>console.log('TaskFlow: http://127.0.0.1:'+ (Number(process.env.PORT)||3000)));
module.exports=server;
