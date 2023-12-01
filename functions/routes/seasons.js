const bbt = require('big-bang-theory');
let check = new Boolean(false);
let array = new Array();


const seasons = (req, res) => {
 for(let i = 0; i <279; i++) {
   if(bbt._embedded.episodes[i].season == req.params.index) {
    array.push(bbt._embedded.episodes[i]);
    check = true;   
   }  
 }
 if(check == true) {
    res.status(200).json({
        success: true,
        index: req.params.index,
        data: array,
      })
 }else{
   res.status(200).json({
     success: false,
     index: req.params.index,
     message: "Not a season"
   })
 }




}


module.exports = seasons;

