// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');
const hsPath = '../../muellScores.json';

export default function handler(req, res) {
  if (req.method === 'POST') {    
    const rawdata = fs.readFileSync(hsPath);
    const highscores = JSON.parse(rawdata);
    highscores.push({ name: req.body.name, score: req.body.score, date:new Date().toISOString() })
    fs.writeFileSync(hsPath, JSON.stringify(highscores));
    res.status(200).json('{ "ok": "cool" }');
  } else {
    // Handle any other HTTP method
    const rawdata = fs.readFileSync(hsPath);
    const highscores = JSON.parse(rawdata);
    res.status(200).json(highscores);
  }
}
