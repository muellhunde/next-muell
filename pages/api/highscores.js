// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const highscores = [];

export default function handler(req, res) {
  if (req.method === 'POST') {

    try {
      const name = req.body.name;
      const score = parseInt(req.body.score);

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

    highscores = highscores.sort(function(a, b) {
      return parseInt(a.score) - parseInt(b.score);
    });

    }
    catch(e) {

    }

    
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.status(200).json(highscores);
  } else {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.status(200).json(highscores);
  }
}
