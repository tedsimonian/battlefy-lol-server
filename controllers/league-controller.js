// router handler functions "controllers"
const lol = require("../api/league");

// getting summoner by name
const getSummoner = async (req, res) => {
  try {
    const { name } = req.params;
    let result = await lol.getSummoner(name);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find summoner with name ${name}`
    });
  }
};

// getting a list of matches (5 by default) by summoner account id
const getMatches = async (req, res) => {
  try {
    const { accountID } = req.params;
    const { count } = req.query;
    let result = await lol.getMatches(accountID, count);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Invalid ${accountID}`
    });
  }
};

// get match details (players, stats, kills, etc..) by match id
const getMatchDetails = async (req, res) => {
  try {
    const { matchID } = req.params;
    let result = await lol.getMatchDetails(matchID);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find match with ID:${matchID}`
    });
  }
};

// get champion details by a champion id
const getChampion = async (req, res) => {
  try {
    const { champID } = req.params;
    let result = await lol.getChampion(champID);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find Champion with ID:${champID}`
    });
  }
};

// get item details by a item id
const getItem = async (req, res) => {
  try {
    const { itemID } = req.params;
    let result = await lol.getItem(itemID);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find item with ID:${itemID}`
    });
  }
};

// get perk (mastery) details by a perk id
const getPerk = async (req, res) => {
  try {
    const { perkID } = req.params;
    let result = await lol.getPerk();
    // make sure we filter only the item that match our item id
    let perk = result.filter((item) => {
      return item.id == perkID;
    });

    res.json(perk);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find perk with ID:${perkID}`
    });
  }
};

// get details on the mastery path by a perk(mastery) path id
const getPerkPath = async (req, res) => {
  try {
    const { pathID } = req.params;
    let result = await lol.getPerkPath();
    // make sure we filter only the items that match our id passed in
    let perkPath = result.filter((item) => {
      return item.id == pathID;
    });

    res.json(perkPath);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find perk path with ID:${pathID}`
    });
  }
};

// get summoner spell details by a spell id
const getSummonerSpell = async (req, res) => {
  try {
    const { spellID } = req.params;
    let result = await lol.getSummonerSpell(spellID);
    res.json(result);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: `Could not find spell with ID:${spellID}`
    });
  }
};

// export all of our functions for use
module.exports = {
  getSummoner,
  getMatches,
  getMatchDetails,
  getChampion,
  getItem,
  getPerk,
  getPerkPath,
  getSummonerSpell
};
