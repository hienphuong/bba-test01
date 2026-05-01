const pairs =[];
let count = 0;

for (let i = 1; i <= 100; i++){
    for (let j = i; j <= 100; j++){
        if ((i+j) % 17 === 0){
            count++;
            pairs.push([i,j]);
        }
    }
}
console.log(`tong so chia het cho 17 la ${count}`);
console.log(`cac cap so chia het 17 la `, pairs);