function createCharacters(){
 const characters = [
    {
        name: "Mario",
        level: 5,
        health: 400
    },
    {
        name: "Sand",
        level: 3,
        health: 150
    }
 ];
 const characterPowerUp = characters.map( char => {
    return {
        name: char.name.toUpperCase(),
        level: char.level*2,
        health: char.health*3
    };
 });
 console.log("Power Up:", characterPowerUp);
 const possibleWinner = characterPowerUp.filter( char => char.health > 1000);
 console.log("winner", possibleWinner);
}
//createCharacters();

function printLeaderboard(){
    const players = [
        {name: "Mario", score: 1000},
        {name: "Sand", score: 500},
        {name: "Alex", score: 800}            
    ];

    const sorted = players.sort((a, b) => {
        return a.score - b.score;
    });
    console.log(sorted);

    sorted[0].rank = "🥇";
    sorted[1].rank = "🥈";
    sorted[2].rank = "🥉";
    
    console.log(sorted);
}
printLeaderboard();


