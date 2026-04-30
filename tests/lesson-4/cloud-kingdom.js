const playerName = "Mario";
const currentLives = 3;
const coin = {
    Level_1 : 25,
    Level_2 : 30,
    Level_3 : 45
}
const sum = coin.Level_1 + coin.Level_2 + coin.Level_3;
const average = sum/3;
const remainder = sum%3;

console.log(`Tong coin cua 3 level la ${sum}`);
console.log(`Trung binh coin cua 3 level la ${average.toFixed(2)}`);
console.log(`So coin du khi chia tong so coin cho 3 la ${remainder}`);
