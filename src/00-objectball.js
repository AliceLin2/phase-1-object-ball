function gameObject(){
    const teams ={
        'home': {
            'teamName':'Brooklyn Nets',
            'colors':['Black', 'White'],
            'players':{
               'Alan Anderson': {
                'number':0,
                'shoe':16,
                'points':22,
                'rebounds':12,
                'assists':12,
                'steals':3,
                'blocks':1,
                'slamDunks':1
               },
               'Reggie Evans':{
                'number':30,
                'shoe':14,
                'points':12,
                'rebounds':12,
                'assists':12,
                'steals':12,
                'blocks':12,
                'slamDunks':7
               },
               'Brook Lopez':{
                'number':11,
                'shoe':17,
                'points':17,
                'rebounds':19,
                'assists':10,
                'steals':3,
                'blocks':1,
                'slamDunks':15
               },
               'Mason Plumlee':{
                'number':1,
                'shoe':19,
                'points':26,
                'rebounds':12,
                'assists':6,
                'steals':3,
                'blocks':8,
                'slamDunks':5
               },
               'Jason Terry':{
                'number':31,
                'shoe':15,
                'points':19,
                'rebounds':2,
                'assists':2,
                'steals':4,
                'blocks':11,
                'slamDunks':1
               }
            }
        },
        'away': {
            'teamName':'Charlotte Hornets',
            'colors':['Turquoise', 'Purple'],
            'players':{
               'Jeff Adrien': {
                'number':4,
                'shoe':18,
                'points':10,
                'rebounds':1,
                'assists':1,
                'steals':2,
                'blocks':7,
                'slamDunks':2
               },
               'Bismak Biyombo':{
                'number':0,
                'shoe':16,
                'points':12,
                'rebounds':4,
                'assists':7,
                'steals':7,
                'blocks':15,
                'slamDunks':10
               },
               'DeSagna Diop':{
                'number':2,
                'shoe':14,
                'points':24,
                'rebounds':12,
                'assists':12,
                'steals':4,
                'blocks':5,
                'slamDunks':5
               },
               'Ben Gordon':{
                'number':8,
                'shoe':15,
                'points':33,
                'rebounds':3,
                'assists':2,
                'steals':1,
                'blocks':1,
                'slamDunks':0
               },
               'Brendan Haywood':{
                'number':33,
                'shoe':15,
                'points':6,
                'rebounds':12,
                'assists':12,
                'steals':22,
                'blocks':5,
                'slamDunks':12
               }
            }
        },
    }
    return teams;
}
function findTeamName(teamName){
    let teams = gameObject();
    for (key in teams) {
        if (teams[key].teamName === teamName){
            return teams[key];
        }
    }
}

function numPointsScored(playerName){
    let player = playerStats(playerName);
    return player.points;
}

function shoeSize(playerName){
    let player = playerStats(playerName);
    return player.shoe;
}

function teamColors(teamName){
    let team = findTeamName(teamName);
    return team.colors;
}

function teamNames(){
    let teams = gameObject();
    let teamNames = [];
    for (teamKey in teams) {
        teamNames.push(teams[teamKey].teamName)
    }
    return teamNames;
}

function playerNumbers(teamName){
    let players = findTeamName(teamName).players;
    let playerNumbers = [];
    for (key in players){ 
        playerNumbers.push(players[key].number);              
    }
    return playerNumbers;
}

function playerStats(playerName){
    let teams = gameObject();
    for (key in teams) {
        let players = teams[key].players;
        for (playerKey in players){
            if (playerKey === playerName){
                return players[playerKey];
            }
        }
    }
}

function bigShoeRebounds(){
    let teams = gameObject();
    let bigShoePlayer;
    let bigShoeTeam;
    let biggestShoe = 0;
    for (teamKey in teams) {
        let players = teams[teamKey].players;
        for (playerKey in players){
            if (players[playerKey].shoe > biggestShoe){
                biggestShoe = players[playerKey].shoe
                bigShoePlayer = playerKey;
                bigShoeTeam = teamKey;
            }
        }
    }
    return teams[bigShoeTeam].players[bigShoePlayer].rebounds;
}

function mostPointsScored(){
    let teams = gameObject();
    let mostPointsPlayer;
    let mostPointsTeam;
    let mostPoints = 0;
    for (teamKey in teams) {
        let players = teams[teamKey].players;
        for (playerKey in players){
            if (players[playerKey].points > mostPoints){
                mostPoints = players[playerKey].points
                mostPointsPlayer = playerKey;
                mostPointsTeam = teamKey;
            }
        }
    }
    return mostPointsPlayer;
}

function winningTeam(){
    let teams = gameObject();
    let winningTeam;
    let winningTeamPoints = 0;
    for (teamKey in teams) {
        let teamPoints=0;
        let players = teams[teamKey].players;
        for (playerKey in players){
            teamPoints += players[playerKey].points;
            if (teamPoints > winningTeamPoints){
              winningTeamPoints = teamPoints
              winningTeam = teamKey;
            }
        }
    }
    return teams[winningTeam].teamName;
}

function playerWithLongestName(){
    let teams = gameObject();
    let playerWithLongestName;
    let LongestNameLength = 0;
    for (teamKey in teams) {
        let players = teams[teamKey].players;
        for (playerKey in players){
            if (playerKey.length > LongestNameLength){
              LongestNameLength = playerKey.length
              playerWithLongestName = playerKey;
            }
        }
    }
    return playerWithLongestName;
}

function mostStealsPlayer(){
    let teams = gameObject();
    let mostStealsPlayer;
    let mostSteals = 0;
    for (teamKey in teams) {
        let players = teams[teamKey].players;
        for (playerKey in players){
            if (players[playerKey].steals > mostSteals){
                mostSteals = players[playerKey].steals
                mostStealsPlayer = playerKey;
            }
        }
    }
    return mostStealsPlayer;
}

function doesLongNameStealATon(){
    return playerWithLongestName() === mostStealsPlayer() ? true : false;
}