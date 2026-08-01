const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = 'C:/Users/Administrator/Desktop/闲鱼/pwa_app';
const mime = {'.html':'text/html','.js':'application/javascript','.json':'application/json','.png':'image/png','.txt':'text/plain'};
http.createServer((req,res)=>{
  let fp = path.join(dir, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end(); return; }
  let ext = path.extname(fp);
  res.writeHead(200, {'Content-Type': mime[ext]||'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
}).listen(7890, '0.0.0.0');
console.log('Server at http://localhost:7890');
