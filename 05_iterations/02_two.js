// for-in loop -> gives keys in return // can't be used on maps
const games = {
    game1: 'Sekiro',
    game2: 'Ghost Of Tsushima',
    game3: 'Red Dead Redemption 2',
    game4: 'GTA V',
    game5: 'Elden Ring'
};

for(const game in games){
    console.log(`${game} is ${games[game]}`);
}