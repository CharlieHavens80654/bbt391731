const episodeDescription = require('./routes/episodeDescription');
const episodeIndex = require('./routes/episodeIndex');
const router = require('express').Router();
const episodes = require('./routes/episodes');
const seasons = require('./routes/seasons')

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex); 
router.get("/episode-description/:index", episodeDescription)
router.get("/seasons/:index", seasons)

module.exports = router; 
