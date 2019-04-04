const LeagueJS = require("leaguejs");
const _ = require("lodash");

require("dotenv").config();

// setup the LeagueJs configuration, it requires the Leage of Legends Developer API Key and a platform ID ('na1', 'eu', etc)
const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY, {
  PLATFORM_ID: process.env.PLATFORM_ID,
  useV4: true, // enables apiVersion overrides
  apiVersionOverrides: {
    Match: "v4",
    Summoner: "v4"
  }
});

/*
    All function below use the LeagueJS library to retrieve data from either Static Data Dragon
    or League of Legends API
*/

const getChampion = (champID) => {
  return leagueJs.StaticData.gettingChampionById(champID);
};

const getItem = (itemID) => {
  return leagueJs.StaticData.gettingItemById(itemID);
};

const getPerk = () => {
  return leagueJs.StaticData.gettingReforgedRunes();
};

const getPerkPath = () => {
  return leagueJs.StaticData.gettingReforgedRunesPaths();
};

const getSummonerSpell = (spellID) => {
  return leagueJs.StaticData.gettingSummonerSpellsById(spellID);
};

const getSummoner = (name) => {
  return leagueJs.Summoner.gettingByName(name);
};

// count is how many records we want to show in the match listing
const getMatches = (accountID, count = 5) => {
  // make sure the query param is a number
  count = Number(count);
  // if its not a number, default it to 5
  if (count === NaN) {
    count = 5;
  }

  return leagueJs.Match.gettingListByAccount(accountID, process.env.PLATFORM_ID, {
    // how many records we want. Up to 5.
    endIndex: count
  });
};

const getMatchDetails = (matchID) => {
  return leagueJs.Match.gettingById(matchID);
};

// export our functions for use
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
