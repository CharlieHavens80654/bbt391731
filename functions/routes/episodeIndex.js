const bbt = require('big-bang-theory');


const episodeIndex = (req, res) => {
 if(req.params.index < 279 && req.params.index >=0){
   res.status(200).json({
     success: true,
     index: req.params.index,
     data: bbt._embedded.episodes[req.params.index]
   }); 
  }
}

module.exports = episodeIndex;

