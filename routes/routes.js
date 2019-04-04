const express = require("express");

// Import our controller functions
const league = require("../controllers/league-controller");

// Create our router
const router = express.Router();

// Setup our backend routes

// Summoner API Routes
router.get("/summoner/:name", league.getSummoner);

// Match API Routes
router.get("/matches/:accountID", league.getMatches);
router.get("/match/:matchID", league.getMatchDetails);
router.get("/match/champ/:champID", league.getChampion);
router.get("/match/item/:itemID", league.getItem);
router.get("/match/perk/:perkID", league.getPerk);
router.get("/match/perkpath/:pathID", league.getPerkPath);
router.get("/match/spell/:spellID", league.getSummonerSpell);

//export our router
module.exports = router;
