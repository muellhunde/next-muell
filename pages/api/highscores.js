// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const fs = require('fs');
// const hsPath = '../../muellScores.json';
const highscores = [];

export default function handler(req, res) {
  if (req.method === 'POST') {    
    // const rawdata = fs.readFileSync(hsPath);
    // const highscores = JSON.parse(rawdata);
    // highscores.push({ name: req.body.name, score: req.body.score, date:new Date().toISOString() })
    // fs.writeFileSync(hsPath, JSON.stringify(highscores));

    const name = req.body.name;
    const score = req.body.score;
    
    let userIdx = -1;
    if(highscores.length>0) {
      userIdx = highscores.findIndex(sc => {
        return sc.name == name;
      });      
    }

    if(userIdx > 0) {
      highscores[userIdx].score = score;
    } else {
      highscores.push({ name: name, score: score });
    }

    
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.status(200).json(highscores);
  } else {
    // Handle any other HTTP method
    // const rawdata = fs.readFileSync(hsPath);
    // const highscores = JSON.parse(rawdata);
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.status(200).json(highscores);
  }
}
