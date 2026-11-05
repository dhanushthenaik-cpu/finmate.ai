const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.md':'text/markdown; charset=utf-8'};
function loadEnv(){ try { for(const line of fs.readFileSync(path.join(ROOT,'.env'),'utf8').split(/\r?\n/)){const m=line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/); if(m&&!process.env[m[1]])process.env[m[1]]=m[2].replace(/^['"]|['"]$/g,'');} } catch{} }
loadEnv();
async function gemini(prompt){
 const key=process.env.GEMINI_API_KEY; if(!key) return null;
 const model=process.env.GEMINI_MODEL || 'gemini-2.5-flash';
 const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{temperature:0.4,maxOutputTokens:700}})});
 if(!r.ok) throw new Error(`Gemini API returned ${r.status}`);
 const j=await r.json(); return j.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('\n') || 'No response received.';
}
const server=http.createServer(async(req,res)=>{
 if(req.method==='POST' && req.url.startsWith('/api/')){
  let body=''; req.on('data',c=>body+=c); req.on('end',async()=>{
   try{
    const data=JSON.parse(body||'{}'); let prompt='';
    if(req.url==='/api/categorize') prompt=`You are a transaction categorization assistant. Return ONLY JSON with keys category and type. Allowed expense categories: Food, Shopping, Transportation, Education, Entertainment, Healthcare, Rent, Utilities, Travel, Other. Allowed income categories: Salary, Freelancing, Business, Investments, Other Income. Transaction: ${JSON.stringify(data.transaction||{})}. Infer whether it is income or expense.`;
    else if(req.url==='/api/analyze') prompt=`You are a practical personal finance educator. Analyze this user's financial summary and provide concise, personalized observations and 3 actionable savings recommendations. Do not invent numbers. State this is educational guidance, not professional financial advice. Data: ${JSON.stringify(data.finance||{})}`;
    else if(req.url==='/api/chat') prompt=`You are FINMATE AI, a friendly personal finance education assistant. Answer based on the user's financial summary where relevant. Do not claim to execute transactions or provide guaranteed investment returns. Keep answers clear and practical. Financial summary: ${JSON.stringify(data.finance||{})}\nUser question: ${String(data.message||'').slice(0,1500)}`;
    else {res.writeHead(404,{'Content-Type':'application/json'});return res.end(JSON.stringify({error:'Unknown API endpoint'}));}
    const answer=await gemini(prompt); if(answer===null){res.writeHead(503,{'Content-Type':'application/json'});return res.end(JSON.stringify({error:'Gemini is not configured. Add GEMINI_API_KEY to a .env file and restart the server.'}));}
    res.writeHead(200,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});res.end(JSON.stringify({answer,provider:'Gemini'}));
   }catch(e){res.writeHead(500,{'Content-Type':'application/json'});res.end(JSON.stringify({error:e.message||'Server error'}));}
  }); return;
 }
 let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); if(pathname==='/') pathname='/index.html';
 const file=path.join(ROOT,pathname.replace(/^\/+/,'')); if(!file.startsWith(ROOT)){res.writeHead(403);return res.end('Forbidden');}
 fs.readFile(file,(err,buf)=>{if(err){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('Not found');}res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream'});res.end(buf);});
});
server.listen(PORT,()=>console.log(`FINMATE AI running at http://localhost:${PORT}`));
